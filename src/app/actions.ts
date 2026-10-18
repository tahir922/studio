"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().trim().email({ message: "Invalid email address." }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters." }),
});

const WEB3FORMS_ACCESS_KEY = "828809d2-8210-4c27-9d07-bcf5f1978ae8";

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
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name,
        email,
        message,
        subject: `New message from ${name} via your portfolio`,
        from_name: "Portfolio Contact Form",
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        errors: {},
        message: "Thank you for your message! I'll get back to you soon.",
        success: true,
      };
    } else {
      console.error("Web3Forms error:", result);
      return {
        errors: {},
        message: "Sorry, something went wrong. Please try again later.",
        success: false,
      };
    }
  } catch (exception: any) {
    console.error("Email sending exception:", exception);
    return {
      errors: {},
      message: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }
}
