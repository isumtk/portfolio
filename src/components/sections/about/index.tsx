import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
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
            As a curious and creative individual with a passion for technology,
            I always found myself drawn to the world of web development. I was
            fascinated by the way that a few lines of code could bring a website
            to life, creating beautiful and interactive experiences for users
            all over the world.
          </p>

          <p>
            With this passion driving me forward, I pursued a Bachelor&apos;s
            degree in
            <span className="cursor-default text-green-400">
              {" "}
              Computer Science{" "}
            </span>
            and I began to explore the world of frontend development. I started
            by learning the basics of
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
            , experimenting with different layouts, colors, and styles to create
            visually stunning web pages.
          </p>

          <p>
            I spent countless hours tinkering with code, debugging, and refining
            my skills, always striving to push myself further and achieve more.
          </p>

          <p>
            As I became proficient in
            <Link
              href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
              target="_blank"
            >
              <span className="text-green-400"> Javascript </span>
            </Link>
            , I realized the importance of mastering modern frontend frameworks
            like React and NextJS to develop full functional and optimized web
            applications.
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
          <Link href={"/me"}>
            <div className="mt-3 flex max-w-[120px] items-center justify-between rounded-md bg-green-500 px-3 py-2 text-base font-medium text-white md:hidden">
              Me
              <Image
                src={"/icons/right.svg"}
                alt="arrow icon"
                className="animate-bounce-right"
                width={24}
                height={24}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
