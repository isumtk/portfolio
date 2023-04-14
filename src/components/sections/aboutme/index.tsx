import Image from "next/image";

const AboutMe = () => {
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
      <div className="flex h-full flex-1 flex-col items-center gap-8">
        <div className="mx-auto max-w-7xl">
          <div className="group relative">
            <div className="absolute -inset-1 h-64 w-64 animate-pulse rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-100 blur transition duration-200"></div>
            <Image
              src={"/hero.png"}
              width={250}
              height={250}
              alt="hero profile"
              className="mb-8 h-60 w-60 scale-110 overflow-hidden rounded-full"
            />
          </div>
        </div>

        <p className="flex w-full gap-6 bg-inherit font-normal leading-relaxed tracking-wide md:w-5/6 lg:text-xl">
          Hello there! My name is Sumit Kumar Rajput. I am a dedicated software
          developer with a Bachelor of Technology in Computer Science.
        </p>
        <p className="w-full bg-inherit font-normal leading-relaxed tracking-wide md:w-5/6 lg:text-xl">
          I have been fortunate enough to work at an early-stage
          <span className="cursor-default text-green-400"> YCombinator </span>
          backed startup as a SDE intern and later as a{" "}
          <span className="cursor-default text-green-400">
            Software Development Engineer for 1.5 years
          </span>
          , where I gained valuable experience in React, NextJS and other modern
          web development technologies. Outside of work, I enjoy exploring new
          technologies and keeping up with the latest industry trends.
        </p>
        <p className="w-full bg-inherit font-normal leading-relaxed tracking-wide md:w-5/6 lg:text-xl">
          When I&apos;m not coding, you can find me indulging in my
          <span className="cursor-default text-green-400"> hobbies</span>, such
          as watching anime, cooking, working out, and reading books. I find
          these activities to be great ways to unwind and find inspiration.
        </p>

        <p className="w-full bg-inherit font-normal leading-relaxed tracking-wide md:w-5/6 lg:text-xl">
          I have a strong
          <span className="cursor-default text-green-400"> interest </span>
          in game development and open-source technology, and I believe that
          every problem can be solved with a combination of creativity, critical
          thinking, and a willingness to learn.
        </p>
        <p className="w-full bg-inherit font-normal leading-relaxed tracking-wide md:w-5/6 lg:text-xl">
          I&apos;m always excited to tackle new challenges and improve as a
          developer. If you&apos;re interested in discussing
          <span className="cursor-default text-green-400"> tech-related </span>
          topics, sharing your favorite anime or cooking tips, or just want to
          connect with a friendly developer, I&apos;d love to chat with you!
          Don&apos;t hesitate to reach out and say hello.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
