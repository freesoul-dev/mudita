
"use client";

import { useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitInquiry, type InquiryState } from "@/app/inquire/actions";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().optional(),
  desiredDates: z.string().min(1, "Please specify desired dates or flexibility"),
  guests: z.coerce.number({invalid_type_error: "Please enter a number"}).min(1, "At least one guest is required"),
  visitType: z.string({ required_error: "Please select a visit type" }),
  interests: z.string().min(10, "Please share your interests (min. 10 characters)").max(500),
  howDidYouHear: z.string().optional(),
  dietary: z.string().optional(),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Submit Inquiry"}
    </Button>
  );
}

export default function InquiryForm() {
  const { toast } = useToast();
  const initialState: InquiryState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useActionState(submitInquiry, initialState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      desiredDates: "",
      guests: 1,
      visitType: "",
      interests: "",
      howDidYouHear: "",
      dietary: ""
    },
  });

  useEffect(() => {
    console.log("Form state changed:", state);
    if (state.message) {
      if (state.success) {
        toast({
          title: "Inquiry Sent!",
          description: state.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
    if (state.errors) {
      console.log("Server validation errors:", state.errors);
      // You can handle specific field errors from the server here if needed
    }
  }, [state, toast, form]);
  
  return (
    <Card>
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form action={dispatch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desiredDates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Dates</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Mid-October or Flexible" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                  control={form.control}
                  name="visitType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Visit</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value || ""}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="individual-retreat">Individual Retreat</SelectItem>
                          <SelectItem value="group-retreat">Group Retreat</SelectItem>
                          <SelectItem value="family-stay">Family Stay</SelectItem>
                          <SelectItem value="wedding-inquiry">Wedding Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
             <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specific Interests/Goals for your stay</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., meditation focus, family time, wellness, writing retreat, exploring Jamaica..."
                        className="resize-y min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             <FormField
                  control={form.control}
                  name="howDidYouHear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us? (Optional)</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value || ""}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="social-media">Social Media</SelectItem>
                          <SelectItem value="search-engine">Search Engine (Google, etc.)</SelectItem>
                          <SelectItem value="recommendation">Recommendation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
             <FormField
                control={form.control}
                name="dietary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Any specific dietary restrictions/preferences? (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., gluten-free, nut allergy, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <SubmitButton />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
