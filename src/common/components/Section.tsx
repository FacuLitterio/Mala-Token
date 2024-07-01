import { Container, ContainerProps } from "@mui/material";
import React, { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<ContainerProps>;

const Section: React.FC<SectionProps> = ({ children, sx, ...rest }) => {
  return (
    <Container
      component="section"
      sx={{
        width: 1,
        p: 3,
        mt: { xs: 5, sm: 6, xl: 12 },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Section;
