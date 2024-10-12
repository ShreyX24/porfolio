import { Button } from "../common/button";
import { otherStack } from "../../lib/techStack";

export const OtherStack = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-5 md:gap-8 font-bold">
      {otherStack.map((item, index) => (
        <Button
          key={index}
          className="flex flex-col items-center"
          placeholder={item.name}
          src={`/assets/icons/${item.img}.png`}
          src_w="40"
        />
      ))}
    </div>
  );
};
