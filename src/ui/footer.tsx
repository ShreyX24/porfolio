import { PopUp } from "../animations/popUp";
import { useColor } from "../context/colorProvider";
import { HomeCompProps } from "../types/types";

export const Footer = ({ mobHeight, deskHeight }: HomeCompProps) => {
  const { colors, isMobile } = useColor();

  const year = new Date().getFullYear();
  return (
    <div
      style={{
        color: colors.cream,
        height: isMobile ? `${mobHeight}vh` : `${deskHeight}px`,
        backgroundColor: colors.blue,
        width: "100vw",
      }}
    >
      <div className="flex h-full items-center justify-center text-center md:items-end">
        <PopUp className="py-2">
          This site is developed and maintained by <strong>shrey.dev</strong> ©{" "}
          {year}
        </PopUp>
      </div>
    </div>
  );
};
