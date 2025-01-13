"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function NavSearch() {

    const [query, setQuery] = useState("");

    console.log(query)
  return (
    <div className=" flex border border-foreground px-1 rounded-full w-full items-center justify-center md:px-3 md:py-1">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" px-3 py-2 text-xl rounded-full w-full border-none focus:outline-none"
      />
      <Button
        variant="outline"
       
        className="bg-accent border-accent text-accent-foreground rounded-full text-xl hover:bg-background hover:text-accent size-8 md:size-10"
      >
        Go
      </Button>
    </div>
  );
}