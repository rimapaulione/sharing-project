"use server";

import { LoginFormSchema, LoginSchema } from "@/lib/schemas";

export async function login(values: LoginFormSchema) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  return { success: "Email sent!" };
}
