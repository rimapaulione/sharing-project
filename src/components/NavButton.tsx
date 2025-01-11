import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  icon: LucideIcon;
  label: string;
  href?: string;
};

export function NavButton({ icon: Icon, label, href }: Props) {
  return (
    <Button
      variant={label === "Login" || label === "Logout" ? "default" : "outline"}
      aria-label={label}
      title={label}
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon />{" "}
          <span className="hidden sm:block sm:text-sm md:text-base lg:text-xl">
            {label}
          </span>
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
}
