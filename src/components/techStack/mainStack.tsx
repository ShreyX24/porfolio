import { techStack } from "../../lib/techStack";
import { Button } from "../common/button";

export const MainStack = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-5 md:gap-8 font-bold">
      {techStack.map((item, index) => (
        <Button
          key={index}
          className="flex flex-col items-center"
          placeholder={item.name}
          src={`/assets/icons/${item.img}.png`}
          src_w="30"
        />
      ))}
    </div>
  );
};
