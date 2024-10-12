import { PopUp } from "../../animations/popUp";
import { BgDecorL } from "../../components/common/bgDecorL";
import { Header } from "../../components/common/header";
import { LinkBtn } from "../../components/common/linkBtn";
import { Descrip } from "../../components/hobbies/descrip";
import { useColor } from "../../context/colorProvider";

export const Hobbies = () => {
  const { colors, isMobile } = useColor();
  const deskHeight = "500px";
  const mobHeight = "100vh";
  return (
    <div
      id="hobbies"
      className="w-screen"
      style={{
        color: isMobile ? colors.secondary : colors.primary,
        height: isMobile ? mobHeight : deskHeight,
        minHeight: isMobile ? mobHeight : "",
      }}
    >
      {/* background decor */}
      <BgDecorL mdh={deskHeight} h={mobHeight} />
      <div className="flex flex-col h-full w-full items-center md:flex-row-reverse ">
        {/* Header */}

        <Header
          title="Hobbies"
          src={isMobile ? "drone_light" : "drone"}
          w="40"
          style={{
            color: isMobile ? colors.primary : colors.secondary,
            height: isMobile ? "470px" : "auto",
            width: isMobile ? "auto" : "30%",
          }}
        />

        {/* projects and link to more */}
        <div
          className="flex flex-col items-center justify-center gap-10 text-center"
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

          <LinkBtn
            placeholder="Explore Hobbies"
            src={isMobile ? "arrow-right2" : "arrow-right2_light"}
            color={isMobile ? "blue" : "cream"}
          />
        </div>
      </div>
    </div>
  );
};
