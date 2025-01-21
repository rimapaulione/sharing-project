"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/app/[locale]/auth/_components/header";
import { BackButton } from "@/app/[locale]/auth/_components/back-button";
import { ComponentProps } from "react";
import { Link } from "@/i18n/routing";

type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  href: string;
};

export function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  href,
}: CardWrapperProps & ComponentProps<typeof Link>) {
  return (
    <Card className="w-full border-none shadow-none bg-background sm:w-[556px] sm:shadow-md ">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>

      <CardFooter>
        <BackButton label={backButtonLabel} href={href} />
      </CardFooter>
    </Card>
  );
}
