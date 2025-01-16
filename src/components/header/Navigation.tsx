"use client";

import { Contact, LogIn, LogOut, User } from "lucide-react";
import { NavButton } from "@/components/header/NavButton";
import { LocaleSwitcher } from "@/components/header/LocaleSwitcher";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";

export function Navigation() {
  const [session, setSession] = useState<string | null>(null);

  return (
    <nav className=" bg-muted w-fit p-5 rounded-b-xl mx-">
      <ul className="flex gap-3 items-center justify-center">
        <li>
          <LocaleSwitcher />
        </li>
        <li>
          <NavButton href="/contact" label="contact" icon={Contact} />
        </li>

        {session ? (
          <>
            <li>
              <NavButton href="/users" label="user" icon={User} />
            </li>

            <li>
              <NavButton
                href="/"
                label="logout"
                icon={LogOut}
                test={() => {
                  setSession(null);
                }}
              />
            </li>
          </>
        ) : (
          <li>
            <NavButton
              href="/login"
              label="login"
              icon={LogIn}
              test={() => {
                setSession("Rima");
              }}
            />
          </li>
        )}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
