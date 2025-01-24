"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  translation: string;
  href: string;
};

export function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  translation,
  href,
}: CardWrapperProps & ComponentProps<typeof Link>) {
  const t = useTranslations(translation);
  return (
    <Card className="w-full border-card shadow-none sm:w-[556px] sm:rounded-lg sm:border sm:border-gray-300  sm:shadow-md sm:shadow-gray-300">
      <CardHeader>
        <Header label={t(headerLabel)} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={t(backButtonLabel)} href={href} />
      </CardFooter>
    </Card>
  );
}
