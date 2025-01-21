import { Params } from "@/lib/types";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: { params: Params }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "RegisterPage" });
  return {
    title: `${t("metadata")}`,
  };
}

export default function RegisterPage() {
  return <div>Register form, need to create</div>;
}
