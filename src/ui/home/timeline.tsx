import { useColor } from "../../context/colorProvider";
import { Header } from "../../components/common/header";
import { VertScroll } from "../../components/timeline/vertScroll";
import { LinkBtn } from "../../components/common/linkBtn";
import { BgDecorR } from "../../components/common/bgDecorR";

export const Timeline = () => {
  const { colors, isMobile } = useColor();
  const deskHeight = "1800px";
  const mobHeight = "170vh";
  return (
    <div
      id="timeline"
      className="w-screen"
      style={{
        color: isMobile ? colors.secondary : colors.primary,
        height: isMobile ? mobHeight : deskHeight,
      }}
    >
      {/* background decor */}
      <BgDecorR mdh={deskHeight} h={mobHeight} />

      <div className="flex flex-col h-full justify-center md:flex-row">
        {/* Header */}

        <Header
          title="Timeline"
          src={isMobile ? "timeline_light" : "timeline"}
          w="40"
          style={{
            color: isMobile ? colors.primary : colors.secondary,
            height: isMobile ? "30%" : "auto",
            width: isMobile ? "auto" : "30%",
          }}
        />

        <div
          className="flex flex-col items-center justify-center gap-10"
          style={{
            color: isMobile ? colors.secondary : colors.primary,
            height: isMobile ? "70%" : "auto",
            width: isMobile ? "100%" : "70%",
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
