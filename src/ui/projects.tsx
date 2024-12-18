import { Header } from "../components/common/header";
import { ProjectComp } from "../components/projects/projectComp";
import { useColor } from "../context/colorProvider";
import { projects } from "../lib/projects";
import { HomeCompProps } from "../types/types";

export const Projects = ({ mobHeight, deskHeight }: HomeCompProps) => {
  const { colors, isMobile } = useColor();

  return (
    <div
      id="projects"
      style={{
        backgroundColor: colors.cream,
        color: isMobile ? colors.blue : colors.cream,
        height: isMobile ? `${mobHeight}vh` : `${deskHeight}px`,
        width: "100vw",
      }}
    >
      <div className="flex flex-col h-full w-full items-center justify-center md:flex-row-reverse ">
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
            title="Projects"
            src={isMobile ? "project_light" : "project"}
            w="40"
            style={{
              color: isMobile ? colors.cream : colors.blue,
              height: isMobile ? "100%" : "100",
              width: isMobile ? "100" : "30%",
            }}
          />
        </div>

        {/* projects and link to more */}
        <div
          className="flex items-center justify-center gap-10 md:gap-10 flex-col"
          style={{
            backgroundColor: isMobile ? colors.cream : colors.blue,
            color: isMobile ? colors.blue : colors.cream,
            height: isMobile ? `${mobHeight - 50}vh` : "100%",
            width: isMobile ? "100%" : "66.66%",
          }}
        >
          {/* Projects */}
          <div className="flex flex-col items-center justify-center gap-5 flex-wrap md:flex-row">
            {projects.map((item, index) => (
              <ProjectComp
                key={index}
                id={item.id}
                appName={item.appName}
                appImg={item.appImg}
                desc={item.desc}
                liveLink={item.liveLink}
                gitLink={item.gitLink}
              />
            ))}
          </div>

          {/* Link to some extra projects */}
          {/* <div>
            <LinkBtn
              placeholder="More on Projects"
              src={isMobile ? "arrow-right2" : "arrow-right2_light"}
              color={isMobile ? "blue" : "cream"}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
