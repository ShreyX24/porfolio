import { HeaderProps } from "../../types/types";
import { Img } from "./img";

export const Header: React.FC<HeaderProps> = ({ title, src, w, style }) => {
  return (
    <div
      className="text-[50px] flex items-center justify-center gap-4 font-semibold z-10"
      style={style}
    >
      <Img src={`/assets/icons/${src}.png`} w={w} />
      <span>{title}</span>
    </div>
  );
};
