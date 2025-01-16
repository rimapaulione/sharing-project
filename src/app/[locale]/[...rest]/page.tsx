import { Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type Params = Promise<{ locale: Locale }>;

export async function generateMetadata(props: { params: Params }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "NotFoundPage" });
  return {
    title: `${t("metadata")}`,
  };
}

export default function CatchAllPage() {
  notFound();
}
