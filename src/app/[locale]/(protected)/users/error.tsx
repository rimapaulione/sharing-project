"use client";

import { Button } from "@/components/ui/button";
import * as Sentry from "@sentry/nextjs";
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
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex-none w-fit justify-self-center self-center">
      <h2>{t("error")}</h2>
      <Button className="m-10" size="sm" onClick={() => reset()}>
        {t("errorButton")}
      </Button>
    </div>
  );
}
