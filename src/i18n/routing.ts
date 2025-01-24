import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "lt"],
  // Used when no locale matches
  defaultLocale: "en",

  pathnames: {
    "/": "/",
    "/contact": {
      en: "/contact",
      lt: "/kontaktai",
    },
    "/terms": {
      en: "/terms",
      lt: "/nuostatos",
    },
    "/auth/login": {
      en: "/auth/login",
      lt: "/auth/prisijungti",
    },
    "/auth/register": {
      en: "/auth/register",
      lt: "/auth/registruotis",
    },
    "/account/user": {
      en: "/account/user",
      lt: "/account/vartotojas",
    },
    "/account/settings": {
      en: "/account/settings",
      lt: "/account/nustatymai",
    },
    "/account/messages": {
      en: "/account/messages",
      lt: "/account/messages",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
