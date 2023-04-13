import {
  AboutSection,
  ExperienceSection,
  LandingSection,
} from "@/components/sections";
import { Navbar } from "@/components/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen snap-y flex-col items-center scroll-smooth px-8 pb-16 pt-8 md:py-16 ">
      <Navbar />
      <LandingSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}
