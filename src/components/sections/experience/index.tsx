import { H2, Card, SubHeadingWithContent } from "@/components/ui";
import { FlashoIntern, FlashoSDE, LPUTech } from "@/content/experience";
import Image from "next/image";
import Link from "next/link";

const ExperienceSection = () => {
  return (
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
          <Link href={"/"}>
            <div className="mt-3 flex max-w-[120px] items-center rounded-md bg-green-500 px-3 py-2 text-base text-white md:hidden">
              <Image
                src={"/icons/dl.svg"}
                alt="download icon"
                className="mr-2"
                width={24}
                height={24}
              />
              Resume
            </div>
          </Link>
        </div>
        <div className="flex w-full flex-col gap-8 bg-inherit font-normal leading-relaxed tracking-wide md:w-3/4 lg:text-2xl">
          <div className="flex flex-col gap-3 md:gap-4">
            <H2 text="Software Development Engineer - Frontend" />
            <SubHeadingWithContent
              subheading="Flasho (previously Humbee) YC W20"
              content="Aug 2022 - Mar 2023"
            />
            <div className="flex flex-col gap-2 text-sm text-stone-400 md:text-base">
              Developed Flasho, frontend from scratch, taking full ownership and
              responsibility.
              <div className="flex flex-col items-start gap-3">
                <span className="text-white">Tech Used :</span>
                <div className="flex flex-wrap items-center gap-2">
                  {FlashoSDE.map((skill) => (
                    <Card key={skill.alt} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <H2 text="SDE Intern" />
            <SubHeadingWithContent
              subheading="Flasho (previously Humbee) YC W20"
              content="Nov 2021 - Jul 2022"
            />
            <div className="flex flex-col gap-2 text-sm text-stone-400 md:text-base lg:w-2/3">
              Worked extensively on Humbee app and implemented functionalities
              such as read-receipts, emoticons, prompt questions, and voice
              messages.
              <div className="flex flex-col items-start gap-3">
                <span className="text-white">Tech Used :</span>
                <div className="flex flex-wrap items-center gap-2">
                  {FlashoIntern.map((skill) => (
                    <Card key={skill.label} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <H2 text="Student, B.Tech CSE" />
            <SubHeadingWithContent
              subheading="LPU, Phagwara, Punjab"
              content="2018 - 2022"
            />
            <div className="flex flex-col gap-2 text-sm text-stone-400 md:text-base lg:w-2/3">
              Learnt various programming languages, database management system,
              computer networks, data stuctures and algorithms, web-dev and
              machine-learning
              <div className="flex flex-col items-start gap-3">
                <span className="text-white">Tech Learnt :</span>
                <div className="flex flex-wrap items-center gap-2">
                  {LPUTech.map((skill) => (
                    <Card key={skill.alt} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
