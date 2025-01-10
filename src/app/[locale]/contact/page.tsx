import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("ContactPage");
  return (
    <div>
      <h1>{t("title")}</h1>

      <Link href="/">{t("home")}</Link>
    </div>
  );
}
