import { Params } from "@/lib/types";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("HomePage");

  return <div>{t("title")}</div>;
}
