"use server";

import { RegisterFormSchema, RegisterSchema } from "@/lib/schemas";

export async function register(values: RegisterFormSchema) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  return { success: "Email sent!" };
}
