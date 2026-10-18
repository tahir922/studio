"use server";

import { z } from "zod";
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().trim().email({ message: "Invalid email address." }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters." }),
});

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
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey.trim() === "") {
    console.log("RESEND_API_KEY is not set. Contact form simulated success.");
    return {
      errors: {},
      message: "Thank you for your message! (Development Mode: RESEND_API_KEY is not configured yet, so email was simulated).",
      success: true,
    };
  }

  try {
    const resend = new Resend(apiKey.trim());
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'tahir8722@gmail.com',
      subject: `New message from ${name} via your portfolio`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; font-size: 15px; color: #333; line-height: 1.6;">
          <h2 style="color: #6366f1;">New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        errors: {},
        message: `Sorry, unable to send email: ${error.message || "Please try again later."}`,
        success: false,
      };
    }

    return {
      errors: {},
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };
  } catch (exception: any) {
    console.error("Email sending exception:", exception);
    return {
      errors: {},
      message: "An unexpected error occurred while sending your message. Please try again.",
      success: false,
    };
  }
}
