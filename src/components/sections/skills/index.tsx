import { SubHeadingWithContent } from "@/components/ui";
import {
  dbAndBassSkills,
  frameworkSkills,
  frontendSkills,
  programmingSkills,
  softDevAndDeploySkills,
} from "@/content/skills";
import Image from "next/image";

const SkillSection = () => {
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
          / skills
        </div>
        <div className="flex w-full flex-col gap-8 bg-inherit font-normal leading-relaxed tracking-wide md:w-3/4 lg:text-2xl">
          <SubHeadingWithContent subheading="Programming Languages" />
          <div className="flex cursor-default flex-wrap items-start gap-4">
            {programmingSkills.map((skill) => (
              <span
                key={skill.alt}
                className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[#101010] md:text-lg"
              >
                <Image
                  src={skill.src}
                  alt={`${skill.alt} icon`}
                  width={40}
                  height={40}
                  className="h-8 w-8 md:h-10 md:w-10"
                />
                <span>{skill.label}</span>
              </span>
            ))}
          </div>
          <SubHeadingWithContent subheading="Frameworks & Libraries" />
          <div className="flex cursor-default flex-wrap items-start gap-4">
            {frameworkSkills.map((skill) => (
              <span
                key={skill.alt}
                className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[#101010] md:text-lg"
              >
                <Image
                  src={skill.src}
                  alt={`${skill.alt} icon`}
                  width={40}
                  height={40}
                  className="h-8 w-8 md:h-10 md:w-10"
                />
                <span>{skill.label}</span>
              </span>
            ))}
          </div>
          <SubHeadingWithContent subheading="Web & Front-End Design" />
          <div className="flex cursor-default flex-wrap items-start gap-4">
            {frontendSkills.map((skill) => (
              <span
                key={skill.alt}
                className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[#101010] md:text-lg"
              >
                <Image
                  src={skill.src}
                  alt={`${skill.alt} icon`}
                  width={40}
                  height={40}
                  className="h-8 w-8 md:h-10 md:w-10"
                />
                <span>{skill.label}</span>
              </span>
            ))}
          </div>
          <SubHeadingWithContent subheading="Database and BaaS Technologies" />
          <div className="flex cursor-default flex-wrap items-start gap-4">
            {dbAndBassSkills.map((skill) => (
              <span
                key={skill.alt}
                className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[#101010] md:text-lg"
              >
                <Image
                  src={skill.src}
                  alt={`${skill.alt} icon`}
                  width={40}
                  height={40}
                  className="h-8 w-8 md:h-10 md:w-10"
                />
                <span>{skill.label}</span>
              </span>
            ))}
          </div>
          <SubHeadingWithContent subheading="Software Developement and Deployment" />
          <div className="flex cursor-default flex-wrap items-start gap-4">
            {softDevAndDeploySkills.map((skill) => (
              <span
                key={skill.alt}
                className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[#101010] md:text-lg"
              >
                <Image
                  src={skill.src}
                  alt={`${skill.alt} icon`}
                  width={40}
                  height={40}
                  className="h-8 w-8 md:h-10 md:w-10"
                />
                <span>{skill.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
