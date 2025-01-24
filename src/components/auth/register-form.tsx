"use client";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/routing";
import { getRegisterSchema, RegisterFormSchema } from "@/lib/schemas";
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
import { CheckboxWithLabel } from "@/components/auth/check-box";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";

export function RegisterForm() {
  const t = useTranslations("RegisterPage");
  const router = useRouter();
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(getRegisterSchema(t)),
    defaultValues: {
      firstname: "",
      city: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkBox: false,
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
                <FormItem className="px-2">
                  <FormLabel className=" sm:text-sm md:text-base lg:text-xl">
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
              name="city"
              render={({ field }) => (
                <FormItem className="px-2">
                  <FormLabel className="sm:text-sm md:text-base lg:text-xl">
                    {t("cityLabel")}
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
                <FormItem className="px-2">
                  <FormLabel className="sm:text-sm md:text-base lg:text-xl">
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
                <FormItem className="px-2">
                  <FormLabel className="sm:text-sm md:text-base lg:text-xl">
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
                <FormItem className="px-2">
                  <FormLabel className="sm:text-sm md:text-base lg:text-xl">
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
          <FormField
            control={form.control}
            name="checkBox"
            render={({ field }) => (
              <FormItem className="px-2">
                <FormControl>
                  <CheckboxWithLabel
                    id="terms"
                    label={t("checkBoxLabel")}
                    linkText={t("checkBoxLink")}
                    href="/terms"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
