import { useEffect, useState } from "react";
import { useColor } from "../../context/colorProvider";
import { useSmoothScroll } from "../../hooks/smoothScroll";
import { scroller } from "../../lib/scrollerbar";
import { ScrollerBarProps } from "../../types/types";
import { color } from "framer-motion";

export const ScrollerBar = ({ activeSection }: ScrollerBarProps) => {
  const [translateValueX, setTranslateValueX] = useState("");
  const [translateValueY, setTranslateValueY] = useState("");
  const { colors, isMobile } = useColor();
  const scrollToSection = useSmoothScroll();

  useEffect(() => {
    if (activeSection === "intro") {
      setTranslateValueY("-82");
    } else if (activeSection === "about") {
      setTranslateValueY("-50");
    } else if (activeSection === "techstack") {
      setTranslateValueY("-16");
    } else if (activeSection === "projects") {
      setTranslateValueY("16");
    } else if (activeSection === "timeline") {
      setTranslateValueY("50");
    } else if (activeSection === "contact") {
      setTranslateValueY("86");
    } else setTranslateValueY("");

    if (activeSection === "intro") {
      setTranslateValueX("93");
    } else if (activeSection === "about") {
      setTranslateValueX("126");
    } else if (activeSection === "techstack") {
      setTranslateValueX("161");
    } else if (activeSection === "projects") {
      setTranslateValueX("194");
    } else if (activeSection === "timeline") {
      setTranslateValueX("227");
    } else if (activeSection === "hobbies") {
      setTranslateValueX("261");
    } else if (activeSection === "contact") {
      setTranslateValueX("294");
    } else setTranslateValueY("");

    //*previous values for later
    // if (activeSection === "intro") {
    //   setTranslateValueY("-100");
    // } else if (activeSection === "about") {
    //   setTranslateValueY("-68");
    // } else if (activeSection === "techstack") {
    //   setTranslateValueY("-34");
    // } else if (activeSection === "projects") {
    //   setTranslateValueY("0");
    // } else if (activeSection === "timeline") {
    //   setTranslateValueY("34");
    // } else if (activeSection === "hobbies") {
    //   setTranslateValueY("68");
    // } else if (activeSection === "contact") {
    //   setTranslateValueY("103");
    // } else setTranslateValueY("");

    // if (activeSection === "intro") {
    //   setTranslateValueX("93");
    // } else if (activeSection === "about") {
    //   setTranslateValueX("126");
    // } else if (activeSection === "techstack") {
    //   setTranslateValueX("161");
    // } else if (activeSection === "projects") {
    //   setTranslateValueX("194");
    // } else if (activeSection === "timeline") {
    //   setTranslateValueX("227");
    // } else if (activeSection === "hobbies") {
    //   setTranslateValueX("261");
    // } else if (activeSection === "contact") {
    //   setTranslateValueX("294");
    // } else setTranslateValueY("");
  }, [activeSection]);

  return (
    <div className="w-screen bottom-0 fixed md:w-[40px] md:h-screen md:top-0 md:right-[40px] md:flex md:items-center md:justify-center z-50">
      <div
        className="flex flex-col items-center justify-center py-3 px-2 gap-2 md:rounded-full md:py-6 md:flex-row border-[2px]"
        style={{ backgroundColor: colors.secondary, borderColor: colors.primary }}
      >
        {/* slider-wrapper */}
        <div className="w-full md:h-full">
          {/* slider */}
          <div
            className="h-2 w-2 rounded-full slowTrans"
            style={{
              backgroundColor: colors.primary,
              transform: isMobile
                ? `translateX(${translateValueX}px)`
                : `translateY(${translateValueY}px)`,
            }}
          ></div>
        </div>

        <div className="flex items-center justify-center gap-4 md:flex-col">
          {scroller.map((item, index) => (
            <button
              key={index}
              className="w-[18px] h-[18px]"
              onClick={() => scrollToSection(`${item.id}`)}
            >
              <img
                src={
                  item.id === "intro"
                    ? `/assets/images/${item.img}.jpg`
                    : `/assets/icons/${item.img}.png`
                }
                alt={
                  item.id === "intro"
                    ? `/assets/images/${item.img}.jpg`
                    : `/assets/icons/${item.img}.png`
                }
                width="40"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
