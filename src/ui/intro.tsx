import { ContactLinks } from "../components/common/contactLinks";
import { LinkBtn } from "../components/common/linkBtn";
import { Hello } from "../components/intro/hello";
import { Name } from "../components/intro/name";
import { Occupation } from "../components/intro/occupation";
import { Picture } from "../components/intro/picture";
import { Typewriter } from "../components/intro/typewriter";
import { useColor } from "../context/colorProvider";
import { useSmoothScroll } from "../hooks/smoothScroll";

interface IntroProps {
  mobHeight: number;
  deskHeight: number;
  occupation_title: string;
}

export const Intro = ({
  mobHeight,
  deskHeight,
  occupation_title,
}: IntroProps) => {
  const { colors, isMobile } = useColor();
  const scrollToSection = useSmoothScroll();

  return (
    // intro wrapper
    <div
      id="intro"
      style={{
        backgroundColor: colors.cream,
        color: isMobile ? colors.blue : colors.cream,
        height: isMobile ? `${mobHeight}vh` : `${deskHeight}px`,
        width: "100vw",
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-start md:flex-row">
        {/* mobile: intro top | destop: intro left*/}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            backgroundColor: isMobile ? colors.blue : colors.cream,
            color: isMobile ? colors.cream : colors.blue,
            height: isMobile ? "50vh" : "100%",
            width: isMobile ? "100%" : "33.33%",
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

        {/* mobile: intro bottom | destop: intro right*/}
        <div
          className="flex justify-center items-center"
          style={{
            backgroundColor: isMobile ? colors.cream : colors.blue,
            color: isMobile ? colors.blue : colors.cream,
            height: isMobile ? "50vh" : "100%",
            width: isMobile ? "100%" : "66.66%",
          }}
        >
          <div className="h-full w-full flex flex-col items-center justify-center md:items-start gap-5 md:gap-10 md:ml-[200px]">
            <div className="w-full flex flex-col items-center justify-center md:items-start">
              {/* Hello intro */}
              <Hello />

              {/* name */}
              <Name />

              {/* occupation */}
              <Occupation placeholder={occupation_title} />
            </div>

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
