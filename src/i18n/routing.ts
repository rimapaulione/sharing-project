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
    "/login": {
      en: "/login",
      lt: "/prisijungti",
    },
    "/users": {
      en: "/users",
      lt: "/users",
    },

    "/users/profile": {
      en: "/users/profile",
      lt: "/users/profile",
    },
    "/users/messages": {
      en: "/users/messages",
      lt: "/users/messages",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
