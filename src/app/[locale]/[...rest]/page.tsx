import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Params } from "@/lib/types";

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
