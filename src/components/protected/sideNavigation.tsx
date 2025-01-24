"use client";
import { SideNavButton } from "@/components/protected/sideNavButton";
import { Home, User, MessageCircle } from "lucide-react";

export function SideNavigation() {
  return (
    <nav className="border-r border-accent ">
      <ul className="flex flex-col gap-2  h-full text-lg">
        <li>
          <SideNavButton icon={Home} label="home" href="/account/user" />
        </li>
        <li>
          <SideNavButton icon={User} label="user" href="/account/settings" />
        </li>
        <li>
          <SideNavButton
            icon={MessageCircle}
            label="messages"
            href="/account/messages"
          />
        </li>

        <li className="mt-auto">
          <p>Sign Out Button</p>
        </li>
      </ul>
    </nav>
  );
}
