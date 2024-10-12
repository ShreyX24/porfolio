import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useColor } from "../../context/colorProvider";
import { workExpDesk, workExpMob } from "../../lib/workExp";

export const VertScroll = () => {
  const { isMobile } = useColor();
  return (
    <>
      {isMobile ? (
        <VerticalTimeline lineColor="#fff">
          {workExpMob.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: `${item.cardBgColor}`,
                color: `${item.cardTextColor}`,
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={`${item.date}`}
              dateClassName="text-white"
              iconStyle={{
                background: `${item.iconBgColor}`,
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={
                <img
                  src={`/assets/icons/${item.icon}.png`}
                  alt=""
                  style={{ width: "30%", height: "30%" }}
                />
              }
            >
              <h3 className="font-bold">{item.workTitle}</h3>
              <h4 className="text-sm">{item.workLocation}</h4>
              <p className="font-normal">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      ) : (
        <VerticalTimeline lineColor="#fff">
          {workExpDesk.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: `${item.cardBgColor}`,
                color: `${item.cardTextColor}`,
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={`${item.date}`}
              dateClassName="text-white"
              iconStyle={{
                background: `${item.iconBgColor}`,
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={
                <img
                  src={`/assets/icons/${item.icon}.png`}
                  alt=""
                  style={{ width: "30%", height: "30%" }}
                />
              }
            >
              <h3 className="font-bold">{item.workTitle}</h3>
              <h4 className="text-sm">{item.workLocation}</h4>
              <p className="font-normal">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      )}
    </>
  );
};
