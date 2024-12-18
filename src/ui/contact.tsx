import { Header } from "../components/common/header";
import { ContactForm } from "../components/contact/contactForm";
import { useColor } from "../context/colorProvider";
import { HomeCompProps } from "../types/types";

export const Contact = ({ mobHeight, deskHeight }: HomeCompProps) => {
  const { colors, isMobile } = useColor();

  return (
    <div
      id="contact"
      style={{
        backgroundColor: colors.blue,
        color: isMobile ? colors.blue : colors.cream,
        height: isMobile ? `${mobHeight}vh` : `${deskHeight}px`,
        width: "100vw",
      }}
    >
      <div className="flex flex-col h-full w-full items-center justify-evenly md:gap-20">
        <div
          className="flex items-center justify-center"
          style={{
            color: isMobile ? colors.cream : colors.blue,
            height: isMobile ? "50vh" : "100%",
            width: isMobile ? "100%" : "33.33%",
          }}
        >
          {/* Header */}
          <Header
            title="Let's Talk"
            src="talk_light"
            w="40"
            style={{
              color: colors.cream,
              height: isMobile ? "30%" : "auto",
              width: isMobile ? "auto" : "auto",
            }}
          />
        </div>
        {/* description and link to more */}
        <div
          className="flex flex-col items-center justify-center text-center gap-[100px] md:flex-row"
          style={{
            color: isMobile ? colors.blue : colors.cream,
            height: isMobile ? `${mobHeight - 50}vh` : "100%",
            width: isMobile ? "100%" : "66.66%",
          }}
        >
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
