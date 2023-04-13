import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen snap-y flex-col items-center scroll-smooth px-8 pb-16 pt-8 md:py-16 ">
      <div className="container relative mb-2 lg:hidden">
        <span className="flex cursor-default select-none items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded bg-green-400" /> Open
          to new opportunities
        </span>
      </div>
      <hr className="container h-1 rounded bg-white" />
      <div className="container flex h-16 items-center justify-between bg-inherit">
        <span className="flex-1 font-medium">Sumit Kumar Rajput</span>
        <span className="hidden flex-1 cursor-default select-none items-center justify-center gap-2 lg:flex">
          <span className="h-2 w-2 animate-pulse rounded bg-green-400" /> Open
          to new opportunities
        </span>
        <div className="flex flex-1 items-center justify-end gap-1 overflow-x-auto md:gap-6 ">
          <Link href={"/me"}>
            <span className="hidden sm:inline-block">Me</span>
          </Link>
          <Link href={"/blog"}>
            <span>Blog</span>
          </Link>

          <Link href={"#contact"}>
            <span className="hidden md:inline-block">Contact</span>
          </Link>
          <Link href={"/resume"}>
            <span className="hidden md:inline-block">Resume</span>
          </Link>
        </div>
      </div>
      <section
        className="
          container flex border-b
          border-slate-600 bg-inherit pb-8 
          pt-8 
          font-sans font-semibold 
          leading-none
          tracking-tighter
          md:h-[40vh] md:items-center lg:h-[80vh]
          "
      >
        <h2 className="text-5xl leading-[3.2rem] lg:text-8xl ">
          <span>I am Sumit,</span> <br />a frontend developer <br /> based in
          Pune, India.
        </h2>
      </section>
      <section
        className="
          container flex
          border-b border-slate-600 bg-inherit  
          pb-16
          pt-8 font-sans font-semibold
          leading-none tracking-tighter
          md:items-center md:px-0 md:pt-16 lg:px-8 lg:pt-28
          "
        id="about"
      >
        <div className="flex h-full flex-1 flex-col gap-8 md:flex-row">
          <div className="w-full items-start text-2xl uppercase text-neutral-600 md:w-1/4 md:text-lg">
            /about
          </div>
          <div className="flex w-full flex-col gap-6 bg-inherit font-normal leading-relaxed tracking-wide md:w-3/4 lg:text-2xl">
            <p>
              As a curious and creative individual with a passion for
              technology, I always found myself drawn to the world of web
              development. I was fascinated by the way that a few lines of code
              could bring a website to life, creating beautiful and interactive
              experiences for users all over the world.
            </p>

            <p>
              With this passion driving me forward, I pursued a Bachelor&apos;s
              degree in
              <span className="cursor-default text-green-400">
                {" "}
                Computer Science{" "}
              </span>
              and I began to explore the world of frontend development. I
              started by learning the basics of
              <Link
                href={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
                target="_blank"
              >
                <span className="text-green-400"> HTML </span>
              </Link>
              and
              <Link
                href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
                target="_blank"
              >
                <span className="text-green-400"> CSS </span>
              </Link>
              , experimenting with different layouts, colors, and styles to
              create visually stunning web pages.
            </p>

            <p>
              I spent countless hours tinkering with code, debugging, and
              refining my skills, always striving to push myself further and
              achieve more.
            </p>

            <p>
              As I became proficient in
              <Link
                href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
                target="_blank"
              >
                <span className="text-green-400"> Javascript </span>
              </Link>
              , I realized the importance of mastering modern frontend
              frameworks like React and NextJS to develop full functional and
              optimized web applications.
            </p>
            <p>
              I invested significant time in learning
              <Link href={"https://react.dev/"} target="_blank">
                <span className="text-green-400"> React </span>
              </Link>
              and
              <Link href={"https://nextjs.org/"} target="_blank">
                <span className="text-green-400"> NextJS </span>
              </Link>
              , gaining a deep understanding of their core concepts and best
              practices. With this knowledge, I have been able to build highly
              performant and scalable web apps, creating seamless user
              experiences.
            </p>
          </div>
        </div>
      </section>
      <section
        className="container flex
          border-b border-slate-600 bg-inherit  
          pb-16
          pt-8 font-sans font-semibold
          leading-none tracking-tighter
          md:items-center md:px-0 md:pt-16 lg:px-8 lg:py-28"
      >
        <div className="flex h-full flex-1 flex-col gap-8 md:flex-row">
          <div className="w-full items-start text-2xl uppercase text-neutral-600 md:w-1/4 md:text-lg">
            /experience
          </div>
          <div className="flex w-full flex-col gap-8 bg-inherit font-normal leading-relaxed tracking-wide md:w-3/4 lg:text-2xl">
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-base font-medium md:text-lg lg:text-2xl">
                Software Development Engineer - Frontend
              </h2>
              <div className="flex flex-wrap items-center text-sm text-slate-500 md:text-base lg:text-xl">
                <p>Flasho (previously Humbee) YC W20</p>
                <span className="mx-2 h-1 w-1 animate-pulse rounded-full bg-white" />
                <p className="text-slate-600">Aug 2022 - Mar 2023</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-stone-400 md:text-base">
                Developed Flasho, frontend from scratch, taking full ownership
                and responsibility.
                <div className="flex flex-col items-start gap-3">
                  <span className="text-white">Tech Used :</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-neutral-800 px-2 py-1 text-white">
                      <Image
                        alt={`React icon`}
                        height="24"
                        width="24"
                        className="animate-spin"
                        src={"/react.svg"}
                      />
                      <span>React</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-white px-2 py-1 text-[#101010]">
                      <Image
                        alt={`NextJS icon`}
                        height="20"
                        width="20"
                        src={"/nextjs.svg"}
                      />
                      <span>NextJS</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-neutral-800 px-2 py-1 text-white">
                      <Image
                        alt={`Redux icon`}
                        height="24"
                        width="24"
                        src={"/redux.svg"}
                      />
                      <span>Redux</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-white px-2 py-1 text-[#101010]">
                      <Image
                        alt={`Tailwind icon`}
                        height="20"
                        width="20"
                        src={"/tailwindcss.svg"}
                      />
                      <span>TailwindCSS</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-neutral-800 px-2 py-1 text-white">
                      <Image
                        alt={`Typescript icon`}
                        height="24"
                        width="24"
                        src={"/typescript.svg"}
                      />
                      <span>TypeScript</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-white px-2 py-1 text-[#101010]">
                      <Image
                        alt={`Cypress icon`}
                        height="20"
                        width="20"
                        src={"/cypress.svg"}
                      />
                      <span>Cypress</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-base font-medium md:text-lg lg:text-2xl">
                SDE Intern
              </h2>
              <div className="flex flex-wrap items-center text-sm text-slate-500 md:text-base lg:text-xl">
                <p>Flasho (previously Humbee) YC W20</p>
                <span className="mx-2 h-1 w-1 animate-pulse rounded-full bg-white" />
                <p className="text-slate-600">Nov 2021 - Jul 2022</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-stone-400 md:text-base lg:w-2/3">
                Worked extensively on Humbee app and implemented functionalities
                such as read-receipts, emoticons, prompt questions, and voice
                messages.
                <div className="flex flex-col items-start gap-3">
                  <span className="text-white">Tech Used :</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-neutral-800 px-2 py-1 text-white">
                      <Image
                        alt={`React Native icon`}
                        height="24"
                        width="24"
                        className="animate-spin"
                        src={"/react.svg"}
                      />
                      <span>React & React-Native</span>
                    </span>

                    <span className="flex cursor-default items-center gap-2 rounded-md bg-white px-2 py-1 text-[#101010]">
                      <span>Chakra UI</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-neutral-800 px-2 py-1 text-white">
                      <Image
                        alt={`Typescript icon`}
                        height="24"
                        width="24"
                        src={"/typescript.svg"}
                      />
                      <span>TypeScript</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-white px-2 py-1 text-[#101010]">
                      <Image
                        alt={`Express icon`}
                        height="20"
                        width="20"
                        src={"/express.svg"}
                      />
                      <span>Express JS</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-neutral-800 px-2 py-1 text-white">
                      <Image
                        alt={`sass icon`}
                        height="24"
                        width="24"
                        src={"/sass.svg"}
                      />
                      <span>Sass</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-base font-medium md:text-lg lg:text-2xl">
                Student, B.Tech CSE
              </h2>
              <div className="flex flex-wrap items-center text-sm text-slate-500 md:text-base lg:text-xl">
                <p>LPU, Phagwara, Punjab</p>
                <span className="mx-2 h-1 w-1 animate-pulse rounded-full bg-white" />
                <p className="text-slate-600">2018 - 2022</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-stone-400 md:text-base lg:w-2/3">
                Learnt various programming languages, database management
                system, computer networks, data stuctures and algorithms,
                web-dev and machine-learning
                <div className="flex flex-col items-start gap-3">
                  <span className="text-white">Tech Learnt :</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-neutral-800 px-2 py-1 text-white">
                      <Image
                        alt={`cpp icon`}
                        height="24"
                        width="24"
                        src={"/cpp.svg"}
                      />
                      <span>C++</span>
                    </span>

                    <span className="flex cursor-default items-center gap-2 rounded-md bg-white px-2 py-1 text-[#101010]">
                      <Image
                        alt={`java icon`}
                        height="24"
                        width="24"
                        src={"/java.svg"}
                      />
                      <span>Java</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-neutral-800 px-2 py-1 text-white">
                      <Image
                        alt={`html5 icon`}
                        height="20"
                        width="20"
                        src={"/html.svg"}
                      />
                      <span>HTML</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-white px-2 py-1 text-[#101010]">
                      <Image
                        alt={`css3 icon`}
                        height="20"
                        width="20"
                        src={"/css.svg"}
                      />
                      <span>CSS</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-neutral-800 px-2 py-1 text-white">
                      <Image
                        alt={`javascript icon`}
                        height="20"
                        width="20"
                        src={"/javascript.svg"}
                      />
                      <span>JavaScript</span>
                    </span>
                    <span className="flex cursor-default items-center gap-2 rounded-md bg-white px-2 py-1 text-[#101010]">
                      <Image
                        alt={`mysql icon`}
                        height="24"
                        width="24"
                        src={"/mysql.svg"}
                      />
                      <span>MySQL</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
