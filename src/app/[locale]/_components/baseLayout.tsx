import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Josefin_Sans } from "next/font/google";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/themeProvider";
import { Header } from "@/components/header/header";

type Props = {
  children: ReactNode;
  locale: string;
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${josefin.className} antialiased bg-background text-background-foreground min-h-screen flex flex-col relative mx-auto `}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="flex-1 py-12 ">
              <main className="mx-auto w-full sm:max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
