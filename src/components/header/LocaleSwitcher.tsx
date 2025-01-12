"use client"

import { useLocale } from "next-intl";
import {Locale, usePathname, useRouter, routing} from '@/i18n/routing';
import { useTransition} from 'react';
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function test(value:Locale){
    console.log(pathname)
    console.log(params)
    const nextLocale = value 
    startTransition(()=>{
      router.replace(
        {pathname, params},
        {locale:nextLocale}
      )
    })
  }

  return (
    <div className="border border-primary bg-background rounded-md
    ">
  <Select onValueChange={test}>
    <SelectTrigger >
      <SelectValue placeholder={locale} />
    </SelectTrigger>
    <SelectContent>
    {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur} >
         {cur}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
    </div>
  )
}
