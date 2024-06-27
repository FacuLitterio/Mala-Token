import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

const AnimatedBox = motion(Box);

type AnimateWhileViewProps = PropsWithChildren<{ anchor: "right" | "left" }>;

const AnimateWhileView: React.FC<AnimateWhileViewProps> = ({
  anchor,
  children,
}) => {
  return (
    <AnimatedBox
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: anchor === "right" ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 0.5, // Animation duration
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </AnimatedBox>
  );
};

export default AnimateWhileView;
