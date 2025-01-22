import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email required!" })
    .email({ message: "Email is required" }),
  password: z.string().trim().min(1, { message: "Password is required" }),
});
