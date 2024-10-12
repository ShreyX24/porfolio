import React from "react";
import { BgDecorProps } from "../../types/types";
import { useColor } from "../../context/colorProvider";

export const BgDecorNav: React.FC<BgDecorProps> = ({ h, mdh }) => {
  const { colors, isMobile } = useColor();
  return (
    <div
      className="absolute flex w-screen"
      style={{ height: isMobile ? h : mdh }}
    >
      <div
        className="h-full w-full absolute -z-10 md:w-2/3 md:h-full"
        style={{ backgroundColor: colors.secondary }}
      ></div>
      <div
        className="h-full w-full absolute -z-20 md:h-full"
        style={{ backgroundColor: colors.primary }}
      ></div>
    </div>
  );
};
