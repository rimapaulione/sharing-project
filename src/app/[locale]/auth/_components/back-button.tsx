import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ComponentProps } from "react";

type BackButtonProps = {
  label: string;
  href: string;
};

export function BackButton({
  label,
  href,
}: BackButtonProps & ComponentProps<typeof Link>) {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
