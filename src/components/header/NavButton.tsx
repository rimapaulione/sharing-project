import { Link } from "@/i18n/routing";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { useTranslations } from "next-intl";
type Props = {
  icon: LucideIcon;
  label: string;
};

export function NavButton({
  icon: Icon,
  label,
  href,

}: Props & ComponentProps<typeof Link>) {

   const t = useTranslations("Navigation");
  return (
    <Button
      variant={label === "login" || label === "logout" ? "secondary" : "outline"}
      aria-label={label}
      title={label}
      asChild
    >
      <Link href={href} key={label}>
        <Icon />{" "}
        <span  className="hidden sm:block sm:text-sm md:text-base lg:text-xl">
        {t(label)}
        </span>
      </Link>
    </Button>
  );
}
