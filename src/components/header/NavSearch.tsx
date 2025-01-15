"use client";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { searchAction } from "@/actions/test";

export function NavSearch() {
  const [query, setQuery] = useState("");
  const t = useTranslations("Navigation");

  return (
    <div className="flex border border-foreground px-1 rounded-full w-full items-center justify-center md:px-3 md:py-1">
      <input
        type="text"
        placeholder={t("search")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" px-3 py-2 rounded-full w-full border-none sm:text-sm md:text-base lg:text-xl focus:outline-none "
      />
      <form action={searchAction}>
        <Button
          variant="outline"
          onClick={() => {
            console.log(query);
            return setQuery("");
          }}
          className="bg-accent border-accent text-accent-foreground rounded-full text-xl hover:bg-background hover:text-accent size-8 md:size-10"
        >
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
}
