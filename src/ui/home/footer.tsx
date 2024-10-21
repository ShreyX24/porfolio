import { PopUp } from "../../animations/popUp";
import { useColor } from "../../context/colorProvider";

export const Footer = () => {
  const { colors, isMobile } = useColor();
  const deskHeight = "200px";
  const mobHeight = "50vh";
  const year = new Date().getFullYear();
  return (
    <div
      className="w-screen"
      style={{
        color: colors.primary,
        height: isMobile ? mobHeight : deskHeight,
        backgroundColor: colors.secondary,
      }}
    >
      <div className="flex h-full items-end justify-center text-center">
        <PopUp className="py-2">
          This site is developed and maintained by <strong>shrey.dev</strong> ©{" "}
          {year}
        </PopUp>
      </div>
    </div>
  );
};
