import React from "react";
import { Navbar } from "../ui/navbar";
import { Intro } from "../ui/intro";
import { About } from "../ui/about";
import { TechStack } from "../ui/techStack";
import { Projects } from "../ui/projects";
import { Timeline } from "../ui/timeline";
import { Contact } from "../ui/contact";
import { Footer } from "../ui/footer";
import { ScrollerBar } from "../ui/scrollerBar";
import { useActiveSection } from "../hooks/activeComp";
import { scroller } from "../lib/scrollerbar";

export const Home: React.FC = () => {
  const activeSection = useActiveSection(scroller.map((item) => item.id));

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Navbar mobHeight={70} deskHeight={120} />

      <Intro
        mobHeight={100}
        deskHeight={900}
        occupation_title="Full Stack Developer"
      />

      <About deskHeight={500} mobHeight={100} />

      <TechStack deskHeight={500} mobHeight={120} />

      <Projects deskHeight={1000} mobHeight={250} />

      <Timeline deskHeight={1800} mobHeight={150} />

      <Contact deskHeight={500} mobHeight={100} />

      <Footer deskHeight={200} mobHeight={40} />

      <ScrollerBar activeSection={activeSection} />

      {/* <Hobbies /> */}
      {/* <PreventMobileView /> */}
    </div>
  );
};
