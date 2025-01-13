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
          <NavButton href="/contact" label="contact" icon={Contact} />
        </li>

        {session ? (
          <li>
            <NavButton href="/login" label="logout" icon={LogOut} />
          </li>
        ) : (
          <li>
            <NavButton href="/login" label="login" icon={LogIn} />
          </li>
        )}
      </ul>
    </nav>
  );
}
