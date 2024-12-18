import { useEffect, useRef } from "react";
import { PopUpProps } from "../types/types";
import { motion, useInView, useAnimation } from "framer-motion";
import { useColor } from "../context/colorProvider";

export const Slide = ({
  className,
  children,
  height = "fit-content",
  width = "fit-content",
  animdelay,
}: PopUpProps) => {
  const { colors, isMobile } = useColor();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
    // console.log(isInView);
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      className={className}
      ref={ref}
      style={{ position: "relative", height, width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        // setting the transition delay to 0.5 if explicitly given else defaults to 0.25
        transition={{ duration: 0.5, delay: animdelay ? 1 : 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: isMobile ? colors.blue : colors.cream,
          zIndex: 40,
        }}
      ></motion.div>
    </div>
  );
};
