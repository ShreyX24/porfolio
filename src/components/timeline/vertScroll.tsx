import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useColor } from "../../context/colorProvider";
import { workExpDesk, workExpMob } from "../../lib/workExp";

interface VertScrollProps {
  isExpanded?: boolean;
}

export const VertScroll = ({ isExpanded }: VertScrollProps) => {
  const { colors, isMobile } = useColor();

  // Use workExpDesk data if expanded or desktop view, otherwise use workExpMob
  const timelineData = isMobile && !isExpanded ? workExpMob : workExpDesk;

  return (
    <VerticalTimeline lineColor={isMobile ? colors.blue : colors.cream}>
      {timelineData.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: isMobile ? colors.blue : colors.cream,
            color: isMobile ? colors.cream : colors.blue,
          }}
          contentArrowStyle={{
            borderRight: `7px solid ${isMobile ? colors.blue : colors.cream}`,
          }}
          date={item.date}
          dateClassName="text-white"
          iconStyle={{
            background: colors.cream,
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderColor: colors.cream,
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
  );
};
