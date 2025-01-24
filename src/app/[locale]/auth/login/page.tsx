import { Params } from "@/lib/types";
import { getTranslations } from "next-intl/server";
import { LoginForm } from "@/components/auth/login-form";

export async function generateMetadata(props: { params: Params }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "LoginPage" });
  return {
    title: `${t("metadata")}`,
  };
}

export default function LoginPage() {
  return <LoginForm />;
}
