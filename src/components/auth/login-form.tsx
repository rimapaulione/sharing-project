"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
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
import { getLoginSchema, LoginFormSchema } from "@/lib/schemas";
import { useRouter } from "@/i18n/routing";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";

export function LoginForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("LoginPage");
  const router = useRouter();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(getLoginSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (values: LoginFormSchema) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      const loginAnswer = await login(values);
      if (loginAnswer.success) {
        setSuccess(loginAnswer.success);
        router.push("/account/user");
      } else setError(loginAnswer.error);
    });
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
                    <Input {...field} type="email" disabled={isPending} />
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
                    <Input {...field} type="password" disabled={isPending} />
                  </FormControl>
                  <FormMessage className="px-2" />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button variant="secondary" className="w-full" disabled={isPending}>
            {t("submit")}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
