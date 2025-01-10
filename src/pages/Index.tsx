import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import OrganizationalExperience from "@/components/OrganizationalExperience";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <OrganizationalExperience />
      <Contact />
    </main>
  );
};

export default Index;