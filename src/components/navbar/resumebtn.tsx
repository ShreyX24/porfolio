import { useState } from "react";
import { useColor } from "../../context/colorProvider";
import { Button } from "../common/button";
import { Img } from "../common/img";
import { openInNewTab } from "../../hooks/openInNewTab";

export const Resumebtn = () => {
  const [expandBtn, setExpandBtn] = useState(false);
  const { colors, isMobile } = useColor();

  const resumeLink =
    "https://drive.google.com/file/d/1WV_9-OMQdl0Oa9fLeArouEeL6QFe7s-H/view?usp=sharing";


  return (
    <>
      {/* resume btn */}
      <div className=" flex items-center justify-center md:w-1/3 z-10">
        <div
          className="flex items-center px-4 py-1 rounded-md cursor-pointer gap-1"
          style={{ backgroundColor: colors.secondary, color: colors.primary }}
          onClick={() => setExpandBtn(!expandBtn)}
        >
          <Button
            placeholder="Resume"
            className="flex gap-2 items-center font-semibold"
            src="/assets/icons/resume_light.png"
            src_w="20"
            onclick={() => console.log("Clicked on resumebtn")}
          />
          {expandBtn ? (
            <Img src="/assets/icons/arrow-right.png" w="12" />
          ) : (
            <Img src="/assets/icons/arrow-down.png" w="12" />
          )}
        </div>

        <div
          className="absolute flex justify-center items-center border-2 rounded-md slowTrans"
          style={
            isMobile
              ? expandBtn
                ? {
                    transform: "translateY(140%)",
                    zIndex: "0",
                    borderColor: colors.primary,
                  }
                : {
                    transform: "translateY(0%)",
                    zIndex: "-1",
                    borderColor: colors.primary,
                  }
              : expandBtn
              ? {
                  transform: "translateX(230%)",
                  zIndex: "0",
                  borderColor: colors.secondary,
                }
              : {
                  transform: "translateX(0%)",
                  zIndex: "-1",
                  borderColor: colors.secondary,
                }
          }
        >
          <Button
            placeholder=""
            className="flex gap-2 items-center justify-center px-2 py-1 font-semibold hover:bg-slate-300 w-full"
            src={
              isMobile
                ? "/assets/icons/link_light.png"
                : "/assets/icons/link.png"
            }
            src_w="18"
            onclick={() => {
              setExpandBtn(false);
              openInNewTab(resumeLink);
            }}
          />
        </div>
      </div>
    </>
  );
};
