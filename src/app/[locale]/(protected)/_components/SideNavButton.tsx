"use client";
import { Link, usePathname } from "@/i18n/routing";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { useTranslations } from "next-intl";

type Props = {
  icon: LucideIcon;
  label: string;
};

export function SideNavButton({
  icon: Icon,
  label,
  href,
}: Props & ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const t = useTranslations("SideNavigation");

  return (
    <Button
      variant="ghost"
      aria-label={label}
      title={label}
      asChild
      className={` justify-start ${pathname === href ? "bg-muted" : ""}`}
    >
      <Link href={href} key={label} className="py-3 px-5 flex w-full gap-4 ">
        <span className="justify-self-start">
          <Icon />
        </span>
        <span className="hidden sm:block sm:text-sm md:text-base lg:text-xl">
          {t(label)}
        </span>
      </Link>
    </Button>
  );
}
