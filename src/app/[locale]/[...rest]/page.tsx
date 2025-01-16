import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "NotFoundPage" });

  return {
    title: `${t("metadata")}`,
  };
}

export default function CatchAllPage() {
  notFound();
}
