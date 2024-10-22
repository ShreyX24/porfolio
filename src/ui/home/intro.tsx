import { useColor } from "../../context/colorProvider";
import { Typewriter } from "../../components/intro/typewriter";
import { Picture } from "../../components/intro/picture";
import { Hello } from "../../components/intro/hello";
import { Name } from "../../components/intro/name";
import { Occupation } from "../../components/intro/occupation";
import { LinkBtn } from "../../components/common/linkBtn";
import { BgDecorR } from "../../components/common/bgDecorR";
import { useSmoothScroll } from "../../hooks/smoothScroll";
import { ContactLinks } from "../../components/common/contactLinks";

export const Intro = () => {
  const { colors, isMobile } = useColor();
  const deskHeight = "900px";
  const mobHeight = "110vh";
  const scrollToSection = useSmoothScroll();

  return (
    // intro wrapper
    <div
      id="intro"
      className={`w-screen`}
      style={{
        color: isMobile ? colors.secondary : colors.primary,
        height: isMobile ? mobHeight : deskHeight,
      }}
    >
      {/* Background decoration */}
      <BgDecorR mdh={deskHeight} h={mobHeight} />

      <div className="w-full h-full flex flex-col items-center justify-center md:flex-row">
        <div
          className="flex flex-col items-center justify-center gap-10 "
          style={{
            color: isMobile ? colors.primary : colors.secondary,
            height: isMobile ? "470px" : "90%",
            width: isMobile ? "auto" : "32%",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-5 h-full">
            {/* profile picture */}
            <Picture />

            {/* Contact link btn */}

            <LinkBtn
              placeholder="Lets Talk"
              src={isMobile ? "arrow-right2_light" : "arrow-right2"}
              color={isMobile ? "cream" : "blue"}
              onclick={() => scrollToSection("contact")}
            />
          </div>

          <ContactLinks />
        </div>

        {/* text layout */}
        <div
          className="flex justify-start items-center"
          style={{
            color: isMobile ? colors.secondary : colors.primary,
            height: isMobile ? "50%" : "auto",
            width: isMobile ? "auto" : "66%",
          }}
        >
          <div className="flex flex-col items-center justify-center md:items-start px-10">
            {/* Hello intro */}
            <Hello />

            {/* name */}
            <Name />

            {/* occupation */}
            <Occupation />

            <div className="h-[100px] py-2 px-5 text-center roboto md:text-start text-2xl flex justify-center md:text-4xl md:w-[600px] md:px-0 md:py-10 md:justify-start">
              <Typewriter
                dataType={[
                  "I'm from a small town called Sambalpur located in Odisha, Bharat...",
                  "I love to develop beatiful websites with a robust backend...",
                  "Please feel free to browse through my portfolio...",
                  "Hope you have a good day 😊",
                ]}
                dataPeriod={2000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
