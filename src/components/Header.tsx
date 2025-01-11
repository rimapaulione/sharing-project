import { Logo } from "@/components/Logo";
import { Navigation } from "@/components/Navigation";

export function Header() {
  return (
    <header className="border-b-2 border-accent  pb-5 ">
      <div className="flex-col max-w-7xl  gap-2 grid justify-items-stretch ">
        <div className="justify-self-end">
          <Navigation />
        </div>

        <div className="flex items-center gap-32 ">
          <Logo />
          <div className="shrink w-full">navSearch</div>
        </div>
      </div>
    </header>
  );
}
