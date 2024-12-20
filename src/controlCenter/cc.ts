// resume lonk
export const resumeLink = "https://drive.google.com/file/d/1s4_bei7raMjZDxCvS1K6FVeprzJ3l0PV/view?usp=sharing"

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
    mobHeight: 100,
    deskHeight: 500
  },
  techstack: {
    mobHeight: 120,
    deskHeight: 500
  },
  projects: {
    mobHeight: 250,
    deskHeight: 1000
  },
  timeline: {
    mobHeight: 150,
    deskHeight: 1800
  },
  contact: {
    mobHeight: 100,
    deskHeight: 500
  },
  footer: {
    mobHeight: 40,
    deskHeight: 200,
  },
};

// Export a centralized control center object
export const ControlCenter = {
  colors: COLORS,
  componentsProps: COMPONENT_PROPS,
};
