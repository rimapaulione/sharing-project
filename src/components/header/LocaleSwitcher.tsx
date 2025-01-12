"use client"

import { useLocale } from "next-intl";

import {Locale, usePathname, useRouter, routing} from '@/i18n/routing';
import {ChangeEvent, useTransition} from 'react';
import { ArrowDown } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function test(value:Locale){
    console.log(value)
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
