import {
  AboutMeSection,
  ExperienceSection,
  FooterSection,
} from "@/components/sections";
import { Navbar } from "@/components/ui";
import Head from "next/head";

const Me = () => {
  return (
    <>
      <Head>
        <title>About me - Sumit Kumar</title>
      </Head>
      <main className="flex min-h-screen select-none snap-y flex-col items-center scroll-smooth px-8 pb-16 pt-8 md:py-16 ">
        <Navbar />
        <AboutMeSection />
        <ExperienceSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Me;
