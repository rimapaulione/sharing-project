"use client";

import { CardWrapper } from "@/app/[locale]/auth/_components/card-wrapper";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email required!" })
    .email({ message: "Email is required" }),
  password: z.string().trim().min(1, { message: "Password is required" }),
});

export function LoginForm() {
  const t = useTranslations("LoginPage");
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (value: z.infer<typeof LoginSchema>) => {
    console.log(value);
  };
  return (
    <CardWrapper
      headerLabel="headerLabel"
      translation="LoginPage"
      backButtonLabel="backButtonLabel"
      href="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="px-2 sm:text-sm md:text-base lg:text-xl">
                    {t("emailFormLabel")}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>
                  <FormMessage className="px-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="px-2 sm:text-sm md:text-base lg:text-xl">
                    {t("passwordFormLabel")}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage className="px-2" />
                </FormItem>
              )}
            />
          </div>
          <Button variant="secondary" className="w-full">
            {t("submit")}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
