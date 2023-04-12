import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SkillsSection from "@/components/sections/skills";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = useCallback(() => setMenu(!menu), [menu]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="sticky z-50 top-0 px-2 bg-white">
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
              <div
                className="
                  fixed 
                  inset-0 
                  top-16 
                  z-50 
                  grid 
                  h-[calc(100vh-4rem)] 
                  grid-flow-row 
                  auto-rows-max 
                  overflow-auto 
                  p-2 pb-32 
                  shadow-md 
                  md:hidden
                "
              >
                <div className="relative z-40 grid gap-6 rounded-md bg-white p-4 shadow-md w-full">
                  <Link href={"/"} className="items-center space-x-2 flex">
                    <Image
                      width={28}
                      height={28}
                      alt="logo"
                      src={"/assets/icons/terminal.svg"}
                    />
                    <span className="font-medium text-lg">Sumit</span>
                  </Link>
                  <nav className="grid grid-flow-row auto-rows-max text-sm w-full">
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
      <div className="flex-1">
        <div className="container mx-auto">
          <section className="w-full md:h-[60vh] lg:h-[70vh] h-[75vh] border-b border-slate-200 bg-white flex flex-col md:pt-8 lg:pt-24 pb-8 lg:px-12 px-4 gap-6">
            <div className="w-80 h-80 overflow-hidden">
              <Image
                src={"/assets/images/hero.svg"}
                width={320}
                height={320}
                alt="hero"
                className="scale-150 object-cover object-right-bottom"
              />
            </div>
            <div className="w-full px-2 flex flex-col gap-4 lg:px-8 md:px-6 ">
              <h1 className="font-bold lg:text-6xl tracking-wider text-2xl md:text-4xl">
                Hello there,
              </h1>
              <p className=" max-w-[40rem] sm:text-xl tracking-wide md:text-xl">
                Welcome! My name is Sumit Kumar, and I&apos;m a frontend
                developer with two years of experience.
                <br /> My passion for creating beautiful and intuitive user
                interfaces led me to specialize in React and NextJS
              </p>
            </div>
          </section>

          <section
            className="
              w-full md:h-[60vh] lg:h-[70vh] h-[55vh]
              border-b border-slate-200 
              bg-white flex flex-col justify-center
              md:pt-8 lg:pt-24 pb-8 
              lg:px-12 px-4 gap-6
              pt-8
            "
          >
            <div className="w-full px-2 flex flex-col gap-4 lg:px-8 md:px-6 ">
              <h1 className="font-bold lg:text-6xl tracking-wider text-2xl md:text-4xl">
                Me :
              </h1>
              <p className=" max-w-[40rem] sm:text-xl tracking-wide md:text-xl">
                I began my career as a frontend developer straight out of
                college, where I studied computer science.
              </p>
              <p className=" max-w-[40rem] sm:text-xl tracking-wide md:text-xl">
                {/* As a frontend developer, I have developed a deep understanding
                of user experience design and web development.  */}
                I&apos;m constantly learning and staying up-to-date with the
                latest advancements in frontend technologies, tools, and
                frameworks.
              </p>
              <p className=" max-w-[40rem] sm:text-xl tracking-wide md:text-xl">
                My philosophy is simple: creating elegant, intuitive, and
                user-friendly interfaces is paramount.
              </p>
            </div>
          </section>

          <SkillsSection />
          <section
            className="
              w-full md:h-[60vh] lg:h-[70vh] h-[55vh]
              border-b border-slate-200 
              bg-white flex flex-col justify-center
              md:pt-8 lg:pt-24 pb-8 
              lg:px-12 px-4 gap-6
              pt-8
            "
          ></section>
        </div>
      </div>
    </div>
  );
};

export default Home;
