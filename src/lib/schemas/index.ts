import * as z from "zod";

export function getLoginSchema(t?: (key: string) => string) {
  return z.object({
    email: z
      .string()
      .trim()
      .min(1, { message: t ? t("emailRequired") : "Email required!" }),
    password: z
      .string()
      .trim()
      .min(1, { message: t ? t("passwordRequired") : "Password is required" }),
  });
}
export type LoginFormSchema = z.infer<
  Awaited<ReturnType<typeof getLoginSchema>>
>;

export function getRegisterSchema(t?: (key: string) => string) {
  return z.object({
    firstname: z
      .string()
      .trim()
      .min(1, { message: t ? t("nameRequired") : "Name is required" }),
    lastname: z
      .string()
      .trim()
      .min(1, { message: t ? t("lastNameRequired") : "Last name is required" }),
    email: z
      .string()
      .trim()
      .min(1, { message: t ? t("emailRequired") : "Email required!" }),
    password: z
      .string()
      .trim()
      .min(1, { message: t ? t("passwordRequired") : "Password is required" })
      .min(6, {
        message: t
          ? t("minPasswordRequired")
          : "Password must have at least 6 characters!",
      }),
    confirmPassword: z
      .string()
      .trim()
      .min(1, { message: t ? t("passwordRequired") : "Password is requireds" }),
  });
}
export type RegisterFormSchema = z.infer<
  Awaited<ReturnType<typeof getRegisterSchema>>
>;
