import React from "react";
import { useColor } from "../../context/colorProvider";
import { Header } from "../../components/common/header";
import { ContactForm } from "../../components/contact/contactForm";

export const Contact = () => {
  const { colors, isMobile } = useColor();
  const deskHeight = "500px";
  const mobHeight = "100vh";
  return (
    <div
      id="contact"
      className="w-screen"
      style={{
        color: colors.primary,
        height: isMobile ? mobHeight : deskHeight,
        backgroundColor: colors.secondary,
      }}
    >
      <div className="flex flex-col h-full items-center justify-evenly">
        {/* Header */}
        <Header
          title="Let's Talk"
          src="talk_light"
          w="40"
          style={{
            color: colors.primary,
            height: isMobile ? "30%" : "auto",
            width: isMobile ? "auto" : "auto",
          }}
        />
        {/* description and link to more */}
        <div
          className="flex flex-col items-center justify-center text-center gap-[100px] md:flex-row"
          style={{
            color: colors.primary,
            height: isMobile ? "70%" : "auto",
            width: isMobile ? "100%" : "70%",
          }}
        >
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
