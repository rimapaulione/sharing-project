import { Logo } from "@/components/header/Logo";
import { Navigation } from "@/components/header/Navigation";
import { NavSearch } from "@/components/header/NavSearch";

export function Header() {
  return (
    <header className="border-b-2 border-accent pb-5 mx-auto w-full px-3 sm:max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <div className="flex-col gap-2 grid justify-items-stretch ">
        <div className="justify-self-end">
          <Navigation />
        </div>
        <div className=" flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:gap-5 md:gap-32 ">
          <div className="justify-items-center">
          <Logo />
          </div>
          <div className="shrink w-full">
            <NavSearch/>
          </div>
        </div>
      </div>
    </header>
  );
}
