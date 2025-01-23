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
