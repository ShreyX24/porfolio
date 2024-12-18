import { useState } from "react";
import { useColor } from "../context/colorProvider";
import { Header } from "../components/common/header";
import { PopUp } from "../animations/popUp";
import { MainStack } from "../components/techStack/mainStack";
import { ToolStack } from "../components/techStack/toolStack";
import { OtherStack } from "../components/techStack/otherStack";
import { LinkBtn } from "../components/common/linkBtn";
import { HomeCompProps } from "../types/types";

export const TechStack = ({ mobHeight, deskHeight }: HomeCompProps) => {
  const [expandMoreBtn, setExpandMoreBtn] = useState<boolean>(false);
  const { colors, isMobile } = useColor();

  const handleSeeMoreBtn = () => {
    setExpandMoreBtn(true);
  };
  return (
    <div
      id="techstack"
      style={{
        backgroundColor: colors.cream,
        color: isMobile ? colors.blue : colors.cream,
        height: isMobile ? `${mobHeight}vh` : `${deskHeight}px`,
        width: "100vw",
      }}
    >
      <div className="h-full flex flex-col items-center justify-center md:flex-row">
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
            title="Tech Stack"
            src={isMobile ? "stack_light" : "stack"}
            w="40"
            style={{
              color: isMobile ? colors.cream : colors.blue,
              height: isMobile ? "470px" : "auto",
              width: isMobile ? "auto" : "30%",
            }}
          />
        </div>

        {/* stacks and link to more */}
        <div
          className="w-screen flex flex-col items-center justify-center gap-10"
          style={{
            backgroundColor: isMobile ? colors.cream : colors.blue,
            color: isMobile ? colors.blue : colors.cream,
            height: isMobile ? "70vh" : "100%",
            width: isMobile ? "100%" : "66.66%",
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
