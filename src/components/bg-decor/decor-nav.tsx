import { useColor } from "../../context/colorProvider";
import { BgDecorProps } from "../../types/types";

export const DecorNav: React.FC<BgDecorProps> = ({ h, mdh }) => {
  const { colors, isMobile } = useColor();
  return (
    <div
      className="absolute flex w-screen"
      style={{ height: isMobile ? h : mdh }}
    >
      <div
        className="h-full w-full absolute -z-10 md:w-2/3"
        style={{ backgroundColor: colors.blue }}
      ></div>
      <div
        className="h-full w-full absolute -z-20"
        style={{ backgroundColor: colors.cream }}
      ></div>
    </div>
  );
};
