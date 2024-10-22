import { ReactNode } from "react";

export type ColorContextPropsType = {
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        error: string;
        logoDotColor1: string;
        logoDotColor2: string;
    };
    isMobile: boolean; // property to determine if the viewport is mobile
};

export type ColorProviderProps = {
    children: ReactNode;
};

export interface ImgProps {
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
    src?: string
    src_w?: string
    type?: "submit" | "button" | "reset" | undefined
};

export interface LinkBtnProps {
    placeholder: string;
    src: string;
    src_w?: string;
    color: "cream" | "blue";
    type?: "submit" | "button" | "reset" | undefined;
    onclick?: () => void

};

export interface BtnHvrProps {
    placeholder: string;

}

export interface TypewriterProps {
    dataType: string[];
    dataPeriod: number;
}

export type btnLib = {
    id: string;
    name: string;
    img: string;
}
export type btnLib2 = {
    name: string;
    img: string;
}

export interface workExpProps {
    cardBgColor?: string;
    cardTextColor?: string;
    date: string;
    iconBgColor: string;
    icon: boolean;
    workTitle: string;
    workLocation: string;
    description: string;
}

export interface footerProps {
    date: Date;
    year: Date;
}

export interface HeaderProps {
    title: string;
    src: string;
    w?: string;
    style?: {};
}

export interface BgDecorProps {
    h?: string;
    mdh?: string;
}


export interface PopUpProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    height?: "fit-content" | "100%"
    className?: string;
    animdelay?: boolean;
}

export interface ProjectCompProps {
    appName: string;
    appImg: string;
    desc: string;
    liveLink: string;
    gitLink: string;
}

export interface ScrollerBarProps {
    activeSection: string | null;
}