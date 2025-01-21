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
    "/auth/login": {
      en: "/auth/login",
      lt: "/auth/prisijungti",
    },
    "/auth/register": {
      en: "/auth/register",
      lt: "/auth/register",
    },
    "/account/user": {
      en: "/account/user",
      lt: "/account/user",
    },
    "/account/settings": {
      en: "/account/settings",
      lt: "/account/settings",
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
