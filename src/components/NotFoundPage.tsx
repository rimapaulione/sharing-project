import Link from "next/link";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <div className="flex-none w-fit justify-self-center text-center flex flex-col gap-4">
      <h2>{t("error")}</h2>
      <p>{t("message")}</p>
      <Button>
        <Link href="/">{t("errorButton")}</Link>
      </Button>
    </div>
  );
}
