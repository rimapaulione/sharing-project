"use client";

import { Contact, LogIn, LogOut, User } from "lucide-react";
import { LocaleSwitcher } from "./localeSwitcher";
import { NavButton } from "./navButton";
import { ModeToggle } from "../modeToggle";

export function Navigation() {
  const session = "";

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
              <NavButton href="/account/user" label="user" icon={User} />
            </li>

            <li>
              <NavButton href="/" label="logout" icon={LogOut} />
            </li>
          </>
        ) : (
          <li>
            <NavButton href="/auth/login" label="login" icon={LogIn} />
          </li>
        )}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
