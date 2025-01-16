import { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Params = Promise<{ slug: string; locale: Locale }>;

export default function Page(props: { params: Params }) {
  const params = use(props.params);
  const { locale } = params;
  setRequestLocale(locale);
  const t = useTranslations("HomePage");

  return <div>{t("title")}</div>;
}
