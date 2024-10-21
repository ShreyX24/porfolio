import React, { useEffect, useRef } from "react";
import { PopUpProps } from "../types/types";
import { motion, useInView, useAnimation } from "framer-motion";

export const PopFromRight = ({
  className,
  children,
  width = "fit-content",
  animdelay,
}: PopUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // console.log(isInView);
  }, [isInView, mainControls]);

  return (
    <div
      className={className}
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div
        className={className}
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        // setting the transition delay to 0.5 if explicitly given else defaults to 0.25
        transition={{ duration: 0.5, delay: animdelay ? 0.5 : 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
