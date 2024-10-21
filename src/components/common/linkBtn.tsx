import React from "react";
import { Button } from "./button";
import { useColor } from "../../context/colorProvider";
import { LinkBtnProps } from "../../types/types";

export const LinkBtn: React.FC<LinkBtnProps> = ({
  placeholder,
  src,
  src_w,
  color,
  onclick,
  type,
}) => {
  const { colors } = useColor();
  return (
    <div
      className="w-fit border-2 z-10 expand"
      style={{
        color: color === "cream" ? colors.primary : colors.secondary,
        borderColor: color === "cream" ? colors.primary : colors.secondary,
      }}
    >
      <Button
      type={type}
        className="flex flex-row-reverse items-center gap-2 px-6 font-semibold"
        placeholder={placeholder}
        src={`/assets/icons/${src}.png`}
        src_w={src_w}
        onclick={onclick}
      />
    </div>
  );
};
