import React from "react";
import { Slide } from "../../animations/slide";

export const Hello = () => {
  return (
    <Slide animdelay={true}>
      <span className="text-2xl md:text-4xl poppins">👋 Hey there, I'm</span>
    </Slide>
  );
};
