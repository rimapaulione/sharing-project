import { Link } from "@/i18n/routing";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

type Props = {
  icon: LucideIcon;
  label: string;
};

export function NavButton({
  icon: Icon,
  label,
  href,
}: Props & ComponentProps<typeof Link>) {
  return (
    <Button
      variant={label === "Login" || label === "Logout" ? "secondary" : "outline"}
      aria-label={label}
      title={label}
      asChild
    >
      <Link href={href}>
        <Icon />{" "}
        <span className="hidden sm:block sm:text-sm md:text-base lg:text-xl">
          {label}
        </span>
      </Link>
    </Button>
  );
}
