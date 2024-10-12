import React from "react";
import { useActiveSection } from "../hooks/activeComp";
import { scroller } from "../lib/scrollerbar";
import { About } from "../ui/home/about";
import { Contact } from "../ui/home/contact";
import { Hobbies } from "../ui/home/hobbies";
import { Intro } from "../ui/home/intro";
import { Navbar } from "../ui/home/navbar";
import { Projects } from "../ui/home/projects";
import { ScrollerBar } from "../ui/home/scrollerBar";
import { TechStack } from "../ui/home/techStack";
import { Timeline } from "../ui/home/timeline";
import { Footer } from "../ui/home/footer";

export const Home: React.FC = () => {
  const activeSection = useActiveSection(scroller.map((item) => item.id));

  return (
    <div className="w-screen h-screen">
      <Navbar />

      <Intro />

      <About />

      <TechStack />

      <Projects />

      <Timeline />

      <Hobbies />

      <Contact />

      <Footer />

      <ScrollerBar activeSection={activeSection} />
    </div>
  );
};
