import { Img } from "./img";

interface HeaderProps {
  title: string;
  src: string;
  w?: string;
  style?: React.CSSProperties;
}

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
