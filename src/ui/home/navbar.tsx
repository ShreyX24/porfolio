import { useColor } from "../../context/colorProvider";
import { Logo } from "../../components/navbar/logo";
import { Navbtns } from "../../components/navbar/navbtns";
import { Resumebtn } from "../../components/navbar/resumebtn";
import { BgDecorNav } from "../../components/common/bgDecorNav";

export const Navbar = () => {
  const { colors, isMobile } = useColor();
  const deskHeight = "120px";
  const mobHeight = "70px";
  return (
    <div
      className=" w-screen"
      style={{
        color: colors.primary,
        height: isMobile ? mobHeight : deskHeight,
      }}
    >
      <div className="w-full h-full flex">
        <BgDecorNav mdh={deskHeight} h={mobHeight} />

        <Logo />

        {/* Visible only in desktop */}
        <Navbtns />

        <Resumebtn />
      </div>
    </div>
  );
};
