import { Logo } from "../components/navbar/logo";
import { Navbtns } from "../components/navbar/navbtns";
import { Resumebtn } from "../components/navbar/resumebtn";
import { useColor } from "../context/colorProvider";
import { HomeCompProps } from "../types/types";

export const Navbar = ({ mobHeight, deskHeight }: HomeCompProps) => {
  const { colors, isMobile } = useColor();
  return (
    <div
      style={{
        color: colors.cream,
        backgroundColor: isMobile ? colors.blue : colors.cream,
        height: isMobile ? `${mobHeight}px` : `${deskHeight}px`,
        width: "100vw",
      }}
    >
      <div className="flex" style={{ height: "100%", width: "100%" }}>
        {/* <DecorNav mdh={deskHeight} h={mobHeight} /> */}

        <div
          className="flex items-center"
          style={{
            backgroundColor: colors.blue,
            height: "100%",
            width: isMobile ? "50%" : "66.66%",
          }}
        >
          <Logo />
          <Navbtns />
        </div>
        <Resumebtn />
      </div>
    </div>
  );
};
