import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("LoginPage");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
