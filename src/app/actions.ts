"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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

  // Here you would typically send an email (e.g., using Resend, Nodemailer).
  // For this example, we'll just log the data to the server console.
  console.log("New Contact Form Submission:");
  console.log("Name:", validatedFields.data.name);
  console.log("Email:", validatedFields.data.email);
  console.log("Message:", validatedFields.data.message);

  return {
    errors: {},
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
