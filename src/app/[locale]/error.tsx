"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("ErrorPage");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex-none w-fit justify-self-center text-center flex flex-col gap-4">
      <h2>{t("error")}</h2>
      <Button size="sm" onClick={() => reset()}>
        {t("errorButton")}
      </Button>
    </div>
  );
}
