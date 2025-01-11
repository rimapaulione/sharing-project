import { Languages, Contact, LogIn, LogOut } from "lucide-react";
import { NavButton } from "@/components/NavButton";

export function Navigation() {
  const session = false;

  return (
    <nav className=" bg-muted w-fit p-5 rounded-b-xl mx-">
      <ul className="flex gap-3 items-center justify-center">
        <li>
          <NavButton href="/about" label="Lt" icon={Languages} />
        </li>
        <li>
          <NavButton href="/contact" label="Contact" icon={Contact} />
        </li>

        {session ? (
          <li>
            {/* <img
                    src="/Logo.jpg"
                    className="h-4 rounded-full"
                    alt="name"
                    referrerPolicy="no-referrer"
                  />
             */}
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
