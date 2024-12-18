import { contactLink } from "../../lib/contactLinks";
import { Button } from "./button";
import { openInNewTab } from "../../hooks/openInNewTab";

export const ContactLinks = () => {
  return (
    <div className="">
      <div className="flex gap-2">
        {contactLink.map((item, index) => (
          <Button
          key={index}
            placeholder=""
            className="flex gap-1 items-center justify-center font-semibold"
            src={`/assets/icons/${item.img}.png`}
            src_w="28"
            onclick={() => {
              openInNewTab(item.link);
            }}
          />
        ))}
      </div>
    </div>
  );
};
