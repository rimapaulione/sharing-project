"use client";

import { useLocale } from "next-intl";
import { Locale, usePathname, useRouter, routing } from "@/i18n/routing";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();
  //const params = useParams();

  function onSelectChange(value: Locale) {
    const nextLocale = value;
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale as Locale });
    });
  }

  return (
    <div
      className="border border-primary bg-background rounded-md text-xs 
    "
    >
      <Select onValueChange={onSelectChange}>
        <SelectTrigger>
          <SelectValue placeholder={locale.toUpperCase()} />
        </SelectTrigger>
        <SelectContent>
          {routing.locales.map((cur) => (
            <SelectItem key={cur} value={cur}>
              {cur.toUpperCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
