import { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Params = Promise<{ locale: Locale }>;

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
