import Link from "next/link";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

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
