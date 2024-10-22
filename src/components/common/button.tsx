import { PopUp } from "../../animations/popUp";
import { ButtonProps } from "../../types/types";
import { Img } from "./img";

export const Button = ({
  onclick,
  placeholder,
  className,
  src,
  src_w,
  type,
  onMouseOver,
  onMouseOut,
}: ButtonProps) => {
  return (
    <PopUp>
      <button
        type={type}
        className={className}
        onClick={onclick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <Img src={src} w={src_w} />
        <span>{placeholder}</span>
      </button>
    </PopUp>
  );
};
