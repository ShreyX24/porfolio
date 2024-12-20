import { contactLink } from "../../lib/contactLinks";
import { Button } from "./button";
import { openInNewTab } from "../../hooks/openInNewTab";
import { useColor } from "../../context/colorProvider";

export const ContactLinks = () => {
  const { isMobile } = useColor();
  return (
    <div className="">
      <div className="flex gap-4 items-center">
        {contactLink.map((item, index) => (
          <Button
            key={index}
            placeholder=""
            className="flex gap-1 items-center justify-center font-semibold"
            src={
              item.label === "Github"
                ? `/assets/icons/${item.img}${isMobile ? "_light" : ""}.png`
                : `/assets/icons/${item.img}.png`
            }
            src_w={item.label === "Github" ? (isMobile ? "22" : "28") : "28"}
            onclick={() => {
              openInNewTab(item.link);
            }}
          />
        ))}
      </div>
    </div>
  );
};
