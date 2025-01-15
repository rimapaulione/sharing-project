import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/Logo.jpg";
import { useTranslations } from "next-intl";

export function Logo() {
  const t = useTranslations("LogoComponent");
  return (
    <Link href="/" className="flex items-center gap-4 size-9 sm:size-14">
      <Image src={logo} height="100" quality={100} width="100" alt={t("alt")} />
      <span className=" hidden text-xs font-semibold text-foreground md:block md:text-2xl">
        {t("name")}
      </span>
    </Link>
  );
}
