import React from "react";
import { ImgProps } from "../../types/types";


export const Img: React.FC<ImgProps> = ({ src, w, className }) => {
  return <img src={src} alt={src} width={w} className={className} />;
};
