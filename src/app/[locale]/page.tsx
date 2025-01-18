import { Locale } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Params = Promise<{ locale: Locale }>;

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("HomePage");

  return <div>{t("title")}</div>;
}
