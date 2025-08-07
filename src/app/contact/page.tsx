import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background pt-24 md:pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full mt-1">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">For general inquiries, please email us.</p>
                        <a href="mailto:info@mudita.rest" className="text-primary hover:underline">
                            info@mudita.rest
                        </a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full mt-1">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">You can reach us by phone during business hours.</p>
                        <p className="text-foreground">+1 (876) 555-1234</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full mt-1">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Our Location</h3>
                        <p className="text-muted-foreground">St. Margarets Bay, Portland, Jamaica</p>
                        <p className="text-sm text-muted-foreground/80">(Please note, we are a private retreat and do not accept drop-in visitors. Visits are by appointment only.)</p>
                    </div>
                </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
