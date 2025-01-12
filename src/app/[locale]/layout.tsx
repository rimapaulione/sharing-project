import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { Header } from "@/components/header/Header";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "MetaHome" });

  return {
    title: {
      template: `%s / ${t("title")}`,
      default: `${t("welcome")} / ${t("title")}`,
    },
    description: "",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${josefin.className} antialiased bg-background text-background-foreground min-h-screen flex flex-col relative mx-auto `}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="flex-1 py-12 ">
            <main className="max-w-7xl mx-auto w-full bg-muted px-10">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
