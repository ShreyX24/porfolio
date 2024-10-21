import { createContext, useContext, useState, useEffect } from "react";
import { ColorContextPropsType, ColorProviderProps } from "../types/types";

const ColorContext = createContext<ColorContextPropsType | undefined>(
  undefined
);

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};

export const ColorProvider = ({ children }: ColorProviderProps) => {
  // State to track if the viewport is mobile (below 768px)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update `isMobile` on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define the initial colors
  const colors = {
    primary: "#fff3b0", // Cream
    secondary: "#0f4c5c", // Dark Blue
    tertiary: "#FF9400", // Orange
    error: "#ff0000", //red

    logoDotColor1: "#5C1F0F", //purple
    logoDotColor2: "#00CCDD", //cyan
  };

  const values = { colors, isMobile };

  return (
    <ColorContext.Provider value={values}>{children}</ColorContext.Provider>
  );
};
