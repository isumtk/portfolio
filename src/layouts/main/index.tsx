import Image from "next/image";
import Link from "next/link";
import { ReactNode, useCallback, useState } from "react";

interface MainProps {
  children?: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = useCallback(() => setMenu(!menu), [menu]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="sticky top-0 px-2 bg-white">
        <div className="container flex items-center mx-auto">
          <div className="flex h-16 items-center justify-between py-4 border-b border-slate-200 w-full">
            <div className="gap-6 md:gap-10 hidden md:flex">
              <Link href={"/"} className="items-center space-x-2 flex">
                <Image
                  width={28}
                  height={28}
                  alt="logo"
                  src={"/assets/icons/terminal.svg"}
                />
                <span className="font-medium text-lg">Sumit</span>
              </Link>
            </div>
            <nav className="hidden gap-6 md:flex flex-1 px-8">
              <Link
                href={"/about"}
                className="flex items-center text-lg font-semibold text-slate-600 sm:text-base"
              >
                About
              </Link>
              <Link
                href={"/blog"}
                className="flex items-center text-lg font-semibold text-slate-600 sm:text-base"
              >
                Blog
              </Link>
              <Link
                href={"/connect"}
                className="flex items-center text-lg font-semibold text-slate-600 sm:text-base"
              >
                Connect
              </Link>
            </nav>

            <button
              onClick={toggleMenu}
              className="flex items-center space-x-2 md:hidden"
            >
              <Image
                width={28}
                height={28}
                alt="logo"
                className="transition-all"
                src={
                  !menu ? "/assets/icons/grid.svg" : "/assets/icons/close.svg"
                }
              />
              <span className="font-medium text-lg">Menu</span>
            </button>

            {menu && (
              <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-2 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
                <div className="relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md">
                  <Link href={"/"} className="items-center space-x-2 flex">
                    <Image
                      width={28}
                      height={28}
                      alt="logo"
                      src={"/assets/icons/terminal.svg"}
                    />
                    <span className="font-medium text-lg">Sumit</span>
                  </Link>
                  <nav className="grid grid-flow-row auto-rows-max text-sm">
                    <Link
                      href={"/about"}
                      className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline opacity-60"
                    >
                      About
                    </Link>
                    <Link
                      href={"/blog"}
                      className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline opacity-60"
                    >
                      Blog
                    </Link>
                    <Link
                      href={"/connect"}
                      className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline opacity-60"
                    >
                      Connect
                    </Link>
                  </nav>
                </div>
              </div>
            )}

            <nav>
              <Link
                href={"/resume"}
                className="
                  inline-flex 
                  items-center 
                  justify-center 
                  text-md 
                  font-medium 
                  transition-colors 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-slate-400 
                  focus:ring-offset-2  
                  bg-slate-900 
                  text-white 
                  h-9 rounded-md px-4"
              >
                Resume
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Main;
