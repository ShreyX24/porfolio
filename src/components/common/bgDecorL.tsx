import React from "react";
import { useColor } from "../../context/colorProvider";
import { BgDecorProps } from "../../types/types";

export const BgDecorL: React.FC<BgDecorProps> = ({ h, mdh}) => {
  const { colors, isMobile } = useColor();
  return (
    <div
      className="absolute flex w-screen"
      style={{ height: isMobile ? h : mdh }}
    >
      {/* blue bg */}
      <div
        className="w-full absolute -z-10 md:w-2/3"
        style={{
          backgroundColor: colors.secondary,
          height: isMobile ? "470px" : "100%",
        }}
      ></div>

      {/* Cream bg */}
      <div
        className="h-full w-full absolute -z-20 md:h-full"
        style={{ backgroundColor: colors.primary }}
      ></div>
    </div>
  );
};
