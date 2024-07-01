import { Paper, PaperProps } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const AnimatedPaper = motion(Paper);

type ImageContainerProps = {
  src: string;
  sx?: PaperProps["sx"];
};

const ImageContainer: React.FC<ImageContainerProps> = ({ src, sx }) => {
  return (
    <AnimatedPaper
      initial={{ opacity: 0, bottom: 10 }}
      whileInView={{ opacity: 1, bottom: 0 }}
      transition={{ delay: 0.2 }}
      elevation={4}
      sx={{
        height: { md: 400, lg: 550 },
        width: "100%",
        maxWidth: 430,
        borderRadius: 20,
        outlineColor: (theme) => theme.palette.primary.main,
        outlineWidth: 2.5,
        outlineStyle: "dashed",
        outlineOffset: 10,
        margin: "0 auto",
        background: `url(${src}) no-repeat`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "110%",
        ...sx,
      }}
    />
  );
};

export default ImageContainer;
