import { useColor } from "../../context/colorProvider";
import { Img } from "../common/img";
import { LinkBtn } from "../common/linkBtn";
import { ProjectCompProps } from "../../types/types";
import { PopUp } from "../../animations/popUp";
import { Slide } from "../../animations/slide";

export const ProjectComp = ({
  appName,
  appImg,
  desc,
  liveLink,
  gitLink,
}: ProjectCompProps) => {
  const { colors, isMobile } = useColor();
  return (
    <div
      className="w-[95%] h-[400px] flex flex-col items-start justify-center border-2 gap-5 p-4 md:items-center md:w-[700px] md:h-[400px] md:flex-row"
      style={{ borderColor: isMobile ? colors.secondary : colors.primary }}
    >
      <div className="flex flex-col gap-4">
        <PopUp className="flex items-center justify-end md:text-[30px] font-semibold roboto">
          {appName}
        </PopUp>

        {/* project img */}
        <div className="w-[200px] h-[110px]  flex items-center justify-center md:w-[400px] md:h-[230px]">
          <Img
            src={`/assets/images/${appImg}.png`}
            className="object-contain"
          />
        </div>

        {/* Link btns */}
        <div className="flex items-center justify-end gap-4">
          <LinkBtn
            placeholder="Demo"
            src="live"
            src_w="30"
            color={isMobile ? "blue" : "cream"}
            onclick={() => (window.location.href = `${liveLink}`)}
          />
          <LinkBtn
            placeholder="Code"
            src={isMobile ? "code2" : "code2_light"}
            src_w="30"
            color={isMobile ? "blue" : "cream"}
            onclick={() => (window.location.href = `${gitLink}`)}
          />
        </div>
      </div>
      <div className="h-full md:w-[200px] flex items-center">
        <Slide>{desc}</Slide>
      </div>
    </div>
  );
};
