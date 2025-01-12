import { Contact, LogIn, LogOut } from "lucide-react";
import { NavButton } from "@/components/header/NavButton";
import { LocaleSwitcher } from "@/components/header/LocaleSwitcher";

export function Navigation() {
  const session = false;

  return (
    <nav className=" bg-muted w-fit p-5 rounded-b-xl mx-">
      <ul className="flex gap-3 items-center justify-center">
        <li>
          <LocaleSwitcher />
        </li>
        <li>
          <NavButton href="/contact" label="Contact" icon={Contact} />
        </li>

        {session ? (
          <li>
            <NavButton href="/login" label="Logout" icon={LogOut} />
          </li>
        ) : (
          <li>
            <NavButton href="/login" label="Login" icon={LogIn} />
          </li>
        )}
      </ul>
    </nav>
  );
}
