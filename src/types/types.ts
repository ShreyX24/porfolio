import { ReactNode } from "react";

export type ColorContextPropsType = {
    colors: {
        cream: string;
        blue: string;
        orange: string;
        red: string;
        purple: string;
        cyan: string;
    };
    isMobile: boolean; // property to determine if the viewport is mobile
};

export type ColorProviderProps = {
    children: ReactNode;
};

export interface NavbarProps {
    mobHeight: string;
    deskHeight: string;
}

export interface BgDecorProps {
    h: string;
    mdh: string;
}

export interface PopUpProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    height?: "fit-content" | "100%"
    className?: string;
    animdelay?: boolean;
}

export interface ImgProps {
    id?: string
    src?: string;
    w?: string | number;
    className?: string;
};

export interface ButtonProps {
    onclick?: () => void;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    placeholder: string;
    className?: string;
    color?: "cream" | "blue";
    src?: string
    src_w?: string
    type?: "submit" | "button" | "reset" | undefined
};

export type btnLib = {
    id: string;
    name: string;
    img: string;
}

export interface HomeCompProps {
    mobHeight: number;
    deskHeight: number;
}