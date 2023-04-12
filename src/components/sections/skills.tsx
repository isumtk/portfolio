import Image from "next/image";

const skills = [
  {
    label: "Javascript",
    slug: "javascript",
  },
  {
    label: "Typescript",
    slug: "typescript",
  },
  {
    label: "C++",
    slug: "cplusplus",
  },
  {
    label: "React",
    slug: "react",
  },

  {
    label: "Next",
    slug: "nextdotjs",
  },
  {
    label: "HTML",
    slug: "html5",
  },
  {
    label: "CSS",
    slug: "css3",
  },
  {
    label: "Sass",
    slug: "sass",
  },
  {
    label: "TailwindCSS",
    slug: "tailwindcss",
  },
  {
    label: "Git",
    slug: "git",
  },
  {
    label: "MongoDB",
    slug: "mongodb",
  },
  {
    label: "PostgreSQL",
    slug: "postgresql",
  },
];

const SkillsSection = () => {
  return (
    <section
      className="
              w-full
              border-b border-slate-200 
              bg-white flex flex-col
              md:pt-8 lg:pt-20 pb-8 
              lg:px-12 px-6 gap-6
              pt-8
            "
    >
      <h1 className="font-bold lg:text-6xl tracking-wider text-2xl md:text-4xl">
        Skills :
      </h1>
      <div className="flex flex-wrap w-full justify-evenly">
        {skills.map((skill) => (
          <div key={skill.slug} className="m-2 flex flex-col items-center ">
            <Image
              alt={`${skill.label} icon`}
              height="84"
              width="84"
              src={`https://cdn.simpleicons.org/${skill.slug}/cyan.svg`}
            />
            <div>{skill.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
