import { PopUp } from "../../animations/popUp";
import { Descrip } from "../../components/about/descrip";
import { BgDecorL } from "../../components/common/bgDecorL";
import { Header } from "../../components/common/header";
import { LinkBtn } from "../../components/common/linkBtn";
import { useColor } from "../../context/colorProvider";

export const About = () => {
  const { colors, isMobile } = useColor();
  const deskHeight = "500px";
  const mobHeight = "100vh";

  return (
    <div
      id="about"
      className="w-screen"
      style={{
        color: isMobile ? colors.secondary : colors.primary,
        height: isMobile ? mobHeight : deskHeight,
      }}
    >
      {/* background decor */}
      <BgDecorL mdh={deskHeight} h={mobHeight} />

      <div className="flex flex-col h-full items-center justify-center md:flex-row-reverse">
        {/* Header */}
        <Header
          title="About"
          src={isMobile ? "about_light" : "about"}
          w="40"
          style={{
            color: isMobile ? colors.primary : colors.secondary,
            height: isMobile ? "50%" : "auto",
            width: isMobile ? "auto" : "30%",
          }}
        />

        {/* description and link to more */}
        <div
          className="flex flex-col items-center justify-center text-center gap-10"
          style={{
            color: isMobile ? colors.secondary : colors.primary,
            height: isMobile ? "50%" : "auto",
            width: isMobile ? "100%" : "70%",
          }}
        >
          {/* description */}
          <PopUp className="flex items-center justify-center">
            <Descrip />
          </PopUp>

          {/* link */}

          {/* <LinkBtn
            placeholder="More About Me"
            src={isMobile ? "arrow-right2" : "arrow-right2_light"}
            color={isMobile ? "blue" : "cream"}
          /> */}
        </div>
      </div>
    </div>
  );
};
