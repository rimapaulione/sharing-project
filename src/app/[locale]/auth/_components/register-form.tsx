"use client";

import { CardWrapper } from "@/app/[locale]/auth/_components/card-wrapper";
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
import { useRouter } from "@/i18n/routing";
import { getRegisterSchema, RegisterFormSchema } from "@/lib/schemas";

export function RegisterForm() {
  const t = useTranslations("RegisterPage");
  const router = useRouter();
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(getRegisterSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (value: RegisterFormSchema) => {
    console.log(value);
    router.push("/auth/login");
  };
  return (
    <CardWrapper
      headerLabel="headerLabel"
      translation="RegisterPage"
      backButtonLabel="backButtonLabel"
      href="/auth/login"
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(submitHandler)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="px-2 sm:text-sm md:text-base lg:text-xl">
                    {t("nameLabel")}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="px-2 sm:text-sm md:text-base lg:text-xl">
                    {t("lastNameLabel")}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                  <FormMessage />
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="px-2 sm:text-sm md:text-base lg:text-xl">
                    {t("confirmPasswordLabel")}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
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
