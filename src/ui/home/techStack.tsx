import React, { useState } from "react";
import { useColor } from "../../context/colorProvider";
import { BgDecorR } from "../../components/common/bgDecorR";
import { Header } from "../../components/common/header";
import { MainStack } from "../../components/techStack/mainStack";
import { ToolStack } from "../../components/techStack/toolStack";
import { OtherStack } from "../../components/techStack/otherStack";
import { LinkBtn } from "../../components/common/linkBtn";
import { PopUp } from "../../animations/popUp";

export const TechStack = () => {
  const [expandMoreBtn, setExpandMoreBtn] = useState<boolean>(false);
  const { colors, isMobile } = useColor();
  const deskHeight = "500px";
  const mobHeight = "120vh";

  const handleSeeMoreBtn = () => {
    setExpandMoreBtn(true);
  };
  return (
    <div
      id="techstack"
      className="w-screen"
      style={{
        color: isMobile ? colors.secondary : colors.primary,
        height: isMobile ? mobHeight : deskHeight,
        minHeight: isMobile ? mobHeight : "",
      }}
    >
      {/* background decor */}
      <BgDecorR mdh={deskHeight} h={mobHeight} />

      <div className="flex flex-col h-full items-center justify-center md:flex-row">
        {/* Header */}

        <Header
          title="Tech Stack"
          src={isMobile ? "stack_light" : "stack"}
          w="40"
          style={{
            color: isMobile ? colors.primary : colors.secondary,
            height: isMobile ? "470px" : "auto",
            width: isMobile ? "auto" : "30%",
          }}
        />

        {/* stacks and link to more */}
        <div
          className="w-screen flex flex-col items-center justify-center gap-10 md:w-2/3"
          style={{
            color: isMobile ? colors.secondary : colors.primary,
            height: isMobile ? "50%" : "auto",
          }}
        >
          <div className="flex flex-col gap-5 md:gap-10">
            {/* main */}
            <div className="flex flex-col items-center justify-center gap-4 py-5 text-sm md:gap-2">
              <PopUp>
                <span className="text-xl poppins font-semibold py-2">
                  Current Stack
                </span>
              </PopUp>

              <MainStack />
            </div>

            <div className="flex items-center justify-center">
              {/* Tools and other stack */}
              {isMobile ? (
                <>
                  {expandMoreBtn ? (
                    <div className="flex flex-col justify-evenly text-center gap-2">
                      <div className="flex flex-col gap-2">
                        <span className="font-semibold poppins">Tools</span>
                        <ToolStack />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-semibold poppins">Others</span>
                        <OtherStack />
                      </div>
                    </div>
                  ) : (
                    <LinkBtn
                      color="blue"
                      placeholder="More About Stacks"
                      src="arrow-down2"
                      onclick={handleSeeMoreBtn}
                    />
                  )}
                </>
              ) : (
                <></>
              )}
            </div>

            <div className="hidden md:flex justify-evenly py-5">
              <div className="flex flex-col gap-2">
                <span className="font-semibold poppins">Tools</span>
                <ToolStack />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold poppins">Others</span>
                <OtherStack />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
