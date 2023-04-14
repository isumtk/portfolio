import { H2, Card, SubHeadingWithContent } from "@/components/ui";
import { GarageManagement, HotelApp, Portfolio } from "@/content/project";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
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
          / projects
        </div>
        <div className="flex w-full flex-col gap-8 bg-inherit font-normal leading-relaxed tracking-wide md:w-3/4 lg:text-2xl">
          <div className="flex flex-col gap-3 md:gap-4">
            <H2 text="Portfolio Site" />
            <SubHeadingWithContent subheading="Website with my personal blog" />
            <div className="flex flex-col gap-2 text-sm text-stone-400 md:text-base">
              <div className="flex flex-col items-start gap-3">
                <span className="text-white">Tech Used :</span>
                <div className="flex flex-wrap items-center gap-2">
                  {Portfolio.map((skill) => (
                    <Card key={skill.alt} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <H2 text="Hotel Booking App" />
            <SubHeadingWithContent subheading="A full-stack hotel booking web-app, that allows user to sign up/ sign in, host and book hotels" />
            <div className="flex flex-col gap-2 text-sm text-stone-400 md:text-base lg:w-2/3">
              <div className="flex flex-col items-start gap-3">
                <span className="text-white">Tech Used :</span>
                <div className="flex flex-wrap items-center gap-2">
                  {HotelApp.map((skill) => (
                    <Card key={skill.label} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <H2 text="Garage Management API" />
            <SubHeadingWithContent subheading="A Rest API that performs CRUD operations and authentication" />
            <div className="flex flex-col gap-2 text-sm text-stone-400 md:text-base lg:w-2/3">
              <div className="flex flex-col items-start gap-3">
                <span className="text-white">Tech Used :</span>
                <div className="flex flex-wrap items-center gap-2">
                  {GarageManagement.map((skill) => (
                    <Card key={skill.alt} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-w-xs items-center justify-between rounded-md border border-slate-50 p-2 text-base text-slate-200">
            mini projects
            <Link href={"https://github.com/isumtk"}>
              <Image
                alt="arrow"
                width={24}
                height={24}
                className="animate-pulse"
                src={"/icons/arrow-right-top.svg"}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
