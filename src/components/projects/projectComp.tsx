import { useColor } from "../../context/colorProvider";
import { Img } from "../common/img";
import { LinkBtn } from "../common/linkBtn";
import { PopUp } from "../../animations/popUp";
import { Slide } from "../../animations/slide";

interface ProjectCompProps {
  id: string;
  appName: string;
  appImg: string;
  desc: string;
  liveLink: string;
  gitLink: string;
}

export const ProjectComp = ({
  id,
  appName,
  appImg,
  desc,
  liveLink,
  gitLink,
}: ProjectCompProps) => {
  const { colors, isMobile } = useColor();
  return (
    <div
      className="w-[95%] min-h-[400px] flex flex-col items-center justify-center border-2 gap-5 p-4 md:items-center md:w-[700px] md:h-[400px] md:flex-row"
      style={{ borderColor: isMobile ? colors.blue : colors.cream }}
    >
      <div className="flex flex-col gap-5">
        <PopUp className="flex items-center justify-end text-[22px] md:text-[30px] font-semibold roboto">
          {appName}
        </PopUp>

        {/* project img */}
        <div className="w-full flex items-center justify-center md:w-[400px] md:h-[230px]">
          <Img
            src={`/assets/images/${appImg}${
              isMobile ? (id === "Eaterio" || id === "Wilt" ? "_L" : "") : ""
            }.png`}
            className="object-contain"
          />
        </div>

        {/* Link btns */}
        <div className="flex items-center gap-4">
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
