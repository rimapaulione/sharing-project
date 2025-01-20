import { Params } from "@/lib/types";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: { params: Params }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "LoginPage" });
  return {
    title: `${t("metadata")}`,
  };
}

export default function LoginPage() {
  const t = useTranslations("LoginPage");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
