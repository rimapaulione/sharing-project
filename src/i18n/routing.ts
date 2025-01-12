import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
//import { Writable } from "utility-types";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "lt"],
  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/": {
      en: "/",
      lt: "/",
    },
    "/contact": {
      en: "/contact",
      lt: "/kontaktai",
    },
    "/login": {
      en: "/login",
      lt: "/prisijungti",
    },
    
  },
 
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
