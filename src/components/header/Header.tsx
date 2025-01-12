import { Logo } from "@/components/header/Logo";
import { Navigation } from "@/components/header/Navigation";

export function Header() {
  return (
    <header className="border-b-2 border-accent pb-5  mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl">
      <div className="flex-col gap-2 grid justify-items-stretch ">
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
