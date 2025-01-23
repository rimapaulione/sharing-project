import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { NavSearch } from "./navSearch";

export function Header() {
  return (
    <header className="shadow-xl pb-5 mx-auto w-full px-3 sm:border-b-2 sm:border-accent sm:shadow-none sm:max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl animate-slide sticky top-0 z-20 bg-background ">
      <div className="flex-col gap-2 grid justify-items-stretch ">
        <div className="flex sm:justify-self-end items-center justify-between ">
          <div className="sm:hidden pl-2 pr-2">
            <Logo />
          </div>

          <Navigation />
        </div>
        <div className=" flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:gap-10 md:gap-32 ">
          <div className="hidden sm:block justify-items-center ">
            <Logo />
          </div>
          <div className="shrink w-full sm:pl-5">
            <NavSearch />
          </div>
        </div>
      </div>
    </header>
  );
}
