// src/config/controlCenter.ts
export const COLORS = {
    cream: "#fff3b0", // Cream
    blue: "#0f4c5c", // Dark Blue
    orange: "#FF9400", // Orange
    red: "#ff0000", // Red
    purple: "#5C1F0F", // Purple
    cyan: "#00CCDD", // Cyan
  };
  
  export const COMPONENT_PROPS = {
    navbar: { 
      mobHeight: 70, 
      deskHeight: 120 
    },
    intro: {
      mobHeight: 100,
      deskHeight: 900,
      occupation_title: "Full Stack Developer",
    },
    about: { 
      mobHeight: 500, 
      deskHeight: 100 
    },
    techstack: { 
      mobHeight: 500, 
      deskHeight: 120 
    },
    projects: { 
      mobHeight: 1000, 
      deskHeight: 250 
    },
    timeline: { 
      mobHeight: 1800, 
      deskHeight: 150 
    },
    contact: { 
      mobHeight: 500, 
      deskHeight: 100 
    },
    footer: { 
      mobHeight: 200, 
      deskHeight: 40 
    },
  };
  
  // Export a centralized control center object
  export const ControlCenter = {
    colors: COLORS,
    componentsProps: COMPONENT_PROPS,
  };

{
  /* <Navbar
        mobHeight={ControlCenter.componentsProps.navbar.mobHeight}
        deskHeight={ControlCenter.componentsProps.navbar.deskHeight}
      />

      <Intro
        mobHeight={ControlCenter.componentsProps.intro.mobHeight}
        deskHeight={ControlCenter.componentsProps.intro.deskHeight}
        occupation_title={ControlCenter.componentsProps.intro.occupation_title}
      />

      <About
        mobHeight={ControlCenter.componentsProps.about.mobHeight}
        deskHeight={ControlCenter.componentsProps.about.deskHeight}
      />

      <TechStack
        mobHeight={ControlCenter.componentsProps.techstack.mobHeight}
        deskHeight={ControlCenter.componentsProps.techstack.deskHeight}
      />

      <Projects
        mobHeight={ControlCenter.componentsProps.projects.mobHeight}
        deskHeight={ControlCenter.componentsProps.projects.deskHeight}
      />

      <Timeline
        mobHeight={ControlCenter.componentsProps.timeline.mobHeight}
        deskHeight={ControlCenter.componentsProps.timeline.deskHeight}
      />

      <Contact
        mobHeight={ControlCenter.componentsProps.contact.mobHeight}
        deskHeight={ControlCenter.componentsProps.contact.deskHeight}
      />

      <Footer
        mobHeight={ControlCenter.componentsProps.footer.mobHeight}
        deskHeight={ControlCenter.componentsProps.footer.deskHeight}
      /> */
}
