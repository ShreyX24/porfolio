import React from "react";
import { useColor } from "../../context/colorProvider";
import { Header } from "../../components/common/header";
import { ProjectComp } from "../../components/projects/projectComp";
import { projects } from "../../lib/projects";
import { BgDecorL } from "../../components/common/bgDecorL";
import { LinkBtn } from "../../components/common/linkBtn";

export const Projects = () => {
  const { colors, isMobile } = useColor();
  const deskHeight = "1000px";
  const mobHeight = "230vh";
  return (
    <div
      id="projects"
      className="w-screen"
      style={{
        color: isMobile ? colors.secondary : colors.primary,
        height: isMobile ? mobHeight : deskHeight,
        minHeight: isMobile ? mobHeight : "",
      }}
    >
      {/* background decor */}
      <BgDecorL mdh={deskHeight} h={mobHeight} />

      <div className="flex flex-col h-full w-full items-center md:flex-row-reverse ">
        {/* Header */}

        <Header
          title="Projects"
          src={isMobile ? "project_light" : "project"}
          w="40"
          style={{
            color: isMobile ? colors.primary : colors.secondary,
            height: isMobile ? "470px" : "auto",
            width: isMobile ? "auto" : "30%",
          }}
        />

        {/* projects and link to more */}
        <div
          className="flex items-center justify-center gap-10 md:gap-10 flex-col"
          style={{
            color: isMobile ? colors.secondary : colors.primary,
            height: isMobile ? "80%" : "auto",
            width: isMobile ? "100%" : "70%",
          }}
        >
          {/* Projects */}
          <div className="flex flex-col items-center justify-center gap-5 flex-wrap md:flex-row">
            {projects.map((item, index) => (
              <ProjectComp
                key={index}
                appName={item.appName}
                appImg={item.appImg}
                desc={item.desc}
                liveLink={item.liveLink}
                gitLink={item.gitLink}
              />
            ))}
          </div>

          {/* Link to some extra projects */}
          <div>
            <LinkBtn
              placeholder="More on Projects"
              src={isMobile ? "arrow-right2" : "arrow-right2_light"}
              color={isMobile ? "blue" : "cream"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
