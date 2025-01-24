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

export function LoginForm() {
  const t = useTranslations("LoginPage");
  const router = useRouter();
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(getLoginSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (value: LoginFormSchema) => {
    console.log(value);
    router.push("/account/user");
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
          <FormSuccess message="" />
          <FormError message="" />
          <Button variant="secondary" className="w-full">
            {t("submit")}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
