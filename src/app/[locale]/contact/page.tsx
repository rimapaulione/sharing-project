import { Params } from "@/lib/types";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

export async function generateMetadata(props: { params: Params }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "LoginPage" });
  return {
    title: `${t("metadata")}`,
  };
}

export default function ContactPage(props: { params: Params }) {
  const params = use(props.params);
  const { locale } = params;
  setRequestLocale(locale);
  const t = useTranslations("ContactPage");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
