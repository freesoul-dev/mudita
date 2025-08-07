"use server";

import { z } from "zod";
import { Resend } from 'resend';


const inquirySchema = z.object({
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

export type InquiryState = {
  errors?: {
    fullName?: string[];
    email?: string[];
    phone?: string[];
    desiredDates?: string[];
    guests?: string[];
    visitType?: string[];
    interests?: string[];
    howDidYouHear?: string[];
    dietary?: string[];
  };
  message?: string | null;
  success: boolean;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitInquiry(
  prevState: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  // Debug: Log all form data
  console.log("Form data received:");
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  const formDataObj = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    desiredDates: formData.get("desiredDates"),
    guests: formData.get("guests"),
    visitType: formData.get("visitType") || "",
    interests: formData.get("interests"),
    howDidYouHear: formData.get("howDidYouHear") || "",
    dietary: formData.get("dietary"),
  };

  console.log("Parsed form data:", formDataObj);

  const validatedFields = inquirySchema.safeParse(formDataObj);

  if (!validatedFields.success) {
    console.log("Validation errors:", validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the form for errors.",
      success: false,
    };
  }

  console.log("New Inquiry Submission:", validatedFields.data);

  try {
    const { fullName, email, phone, desiredDates, guests, visitType, interests, howDidYouHear, dietary } = validatedFields.data;

    await resend.emails.send({
      from: 'Mudita Inquiry Form <noreply@mudita.rest>',
      to: 'info@mudita.rest',
      subject: 'New Inquiry Submission - Mudita',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">New Inquiry Submission</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                <p style="margin: 10px 0;"><strong>Full Name:</strong> ${fullName}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p style="margin: 10px 0;"><strong>Desired Dates:</strong> ${desiredDates}</p>
              </div>
              <div>
                <p style="margin: 10px 0;"><strong>Number of Guests:</strong> ${guests}</p>
                <p style="margin: 10px 0;"><strong>Type of Visit:</strong> ${visitType}</p>
                <p style="margin: 10px 0;"><strong>How Did You Hear:</strong> ${howDidYouHear || 'N/A'}</p>
              </div>
            </div>
            
            <div style="margin-top: 20px;">
              <p style="margin: 10px 0;"><strong>Interests/Goals:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
                ${interests.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            ${dietary ? `
            <div style="margin-top: 20px;">
              <p style="margin: 10px 0;"><strong>Dietary Restrictions/Notes:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #10b981;">
                ${dietary.replace(/\n/g, '<br>')}
              </div>
            </div>
            ` : ''}
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This inquiry was submitted from the Mudita website at ${new Date().toLocaleString()}.
          </p>
        </div>
      `,
    });

    // You can keep these if you plan to implement them later
    // Placeholder for sending data to Google Sheets, CRM, and sending emails via Zeno.
    // await sendToGoogleSheets(validatedFields.data);
    // await sendEmailNotification(validatedFields.data);

    // In a real application, you would have your API calls here.
    // await sendToGoogleSheets(validatedFields.data);
    // await sendEmailNotification(validatedFields.data);

    return {
      message: "Thank you for your inquiry! We will get back to you within 48 hours.",
      success: true,
    };
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
    };
  }
}
