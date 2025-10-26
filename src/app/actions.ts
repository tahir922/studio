"use server";

import { z } from "zod";
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>', // This must be a verified domain in Resend
        to: 'tahir8722@gmail.com',
        subject: `New message from ${name} via your portfolio`,
        reply_to: email,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    });

    if (error) {
        console.error("Resend error:", error);
        return {
            errors: {},
            message: "Sorry, something went wrong and I couldn't send your message. Please try again later.",
            success: false,
        };
    }

    return {
        errors: {},
        message: "Thank you for your message! I'll get back to you soon.",
        success: true,
    };
  } catch(exception) {
      console.error("Email sending exception:", exception);
      return {
          errors: {},
          message: "An unexpected error occurred. Please try again.",
          success: false,
      };
  }
}
