import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
// import { fetchGithubProjects } from "@/lib/github";
import { getStaticProps } from "@/lib/github";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
export default async function Home() {
  const projects = await getStaticProps()
  return (
    <> 
      <HeroSection />
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection projects={projects}/>
      <ContactSection/>
    </>
  );
}
