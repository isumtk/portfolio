import {
  AboutSection,
  LandingSection,
  ProjectSection,
  FooterSection,
} from "@/components/sections";
import SkillSection from "@/components/sections/skills";
import { Navbar } from "@/components/ui";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sumit Kumar - Home</title>
      </Head>
      <main className="flex min-h-screen select-none snap-y flex-col items-center scroll-smooth px-8 pb-16 pt-8 md:py-16 ">
        <Navbar />
        <LandingSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <FooterSection />
      </main>
    </>
  );
}
