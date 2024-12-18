import { PopUp } from "../animations/popUp";
import { Descrip } from "../components/about/descrip";
import { Header } from "../components/common/header";
import { useColor } from "../context/colorProvider";
import { HomeCompProps } from "../types/types";


export const About = ({ mobHeight, deskHeight }: HomeCompProps) => {
  const { colors, isMobile } = useColor();

  return (
    <div
      id="about"
      style={{
        backgroundColor: colors.cream,
        color: isMobile ? colors.blue : colors.cream,
        height: isMobile ? `${mobHeight}vh` : `${deskHeight}px`,
        width: "100vw",
      }}
    >
      <div className="h-full flex flex-col items-center justify-center md:flex-row-reverse">
        <div
         className="flex items-center justify-center"
          style={{
            backgroundColor: isMobile ? colors.blue : colors.cream,
            color: isMobile ? colors.cream : colors.blue,
            height: isMobile ? "50vh" : "100%",
            width: isMobile ? "100%" : "33.33%",
          }}
        >
          {/* Header */}
          <Header
            title="About"
            src={isMobile ? "about_light" : "about"}
            w="40"
          />
        </div>

        {/* description and link to more */}
        <div
          className="flex flex-col items-center justify-center text-center gap-10"
          style={{
            backgroundColor: isMobile ? colors.cream : colors.blue,
            color: isMobile ? colors.blue : colors.cream,
            height: isMobile ? "50vh" : "100%",
            width: isMobile ? "100%" : "66.66%",
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
