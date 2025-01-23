import { routing } from "@/i18n/routing";
import { BaseLayout } from "./[locale]/_components/baseLayout";
import NotFoundPage from "./[locale]/_components/notFoundPage";

export default function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundPage />
    </BaseLayout>
  );
}
