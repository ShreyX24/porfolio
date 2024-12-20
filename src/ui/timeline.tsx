import { Header } from "../components/common/header";
import { LinkBtn } from "../components/common/linkBtn";
import { VertScroll } from "../components/timeline/vertScroll";
import { useColor } from "../context/colorProvider";
import { HomeCompProps } from "../types/types";

export const Timeline = ({ mobHeight, deskHeight }: HomeCompProps) => {
  const { colors, isMobile } = useColor();
  return (
    <div
      id="timeline"
      style={{
        backgroundColor: colors.cream,
        color: isMobile ? colors.blue : colors.cream,
        height: isMobile ? `${mobHeight}vh` : `${deskHeight}px`,
        width: "100vw",
      }}
    >
      <div className="flex flex-col h-full justify-center md:flex-row">
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
            title="Timeline"
            src={isMobile ? "timeline_light" : "timeline"}
            w="40"
            style={{
              color: isMobile ? colors.cream : colors.blue,
              height: isMobile ? "50vh" : "100%",
              width: isMobile ? "100%" : "33.33%",
            }}
          />
        </div>
        <div
          className="flex flex-col items-center justify-center gap-10"
          style={{
            backgroundColor: isMobile ? colors.cream : colors.blue,
            color: isMobile ? colors.blue : colors.cream,
            height: isMobile ? `${mobHeight - 50}vh` : "100%",
            width: isMobile ? "100%" : "66.66%",
          }}
        >
          <VertScroll />
          {isMobile ? (
            <LinkBtn
              placeholder="More in Timeline"
              src={isMobile ? "arrow-right2" : "arrow-right2_light"}
              color="blue"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
