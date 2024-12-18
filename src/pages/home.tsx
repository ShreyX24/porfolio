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
import { ControlCenter } from "../controlCenter/cc";

export const Home: React.FC = () => {
  const activeSection = useActiveSection(scroller.map((item) => item.id));

  return (
    // the control center is located in /controlCenter/cc.ts
    <div className="w-screen min-h-screen flex flex-col">
      <Navbar
        deskHeight={ControlCenter.componentsProps.navbar.deskHeight}
        mobHeight={ControlCenter.componentsProps.navbar.mobHeight}
      />

      <Intro
        deskHeight={ControlCenter.componentsProps.intro.deskHeight}
        mobHeight={ControlCenter.componentsProps.intro.mobHeight}
        occupation_title={ControlCenter.componentsProps.intro.occupation_title}
      />

      <About
        deskHeight={ControlCenter.componentsProps.about.deskHeight}
        mobHeight={ControlCenter.componentsProps.about.mobHeight}
      />

      <TechStack
        deskHeight={ControlCenter.componentsProps.techstack.deskHeight}
        mobHeight={ControlCenter.componentsProps.techstack.mobHeight}
      />

      <Projects
        deskHeight={ControlCenter.componentsProps.projects.deskHeight}
        mobHeight={ControlCenter.componentsProps.projects.mobHeight}
      />

      <Timeline
        deskHeight={ControlCenter.componentsProps.timeline.deskHeight}
        mobHeight={ControlCenter.componentsProps.timeline.mobHeight}
      />

      <Contact
        deskHeight={ControlCenter.componentsProps.contact.deskHeight}
        mobHeight={ControlCenter.componentsProps.contact.mobHeight}
      />

      <Footer
        deskHeight={ControlCenter.componentsProps.footer.deskHeight}
        mobHeight={ControlCenter.componentsProps.footer.mobHeight}
      />

      <ScrollerBar activeSection={activeSection} />

      {/* <Hobbies /> */}
      {/* <PreventMobileView /> */}
    </div>
  );
};
