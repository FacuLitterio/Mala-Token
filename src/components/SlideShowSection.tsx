import { Avatar, Box, Card, Grid, Stack, Typography } from "@mui/material";
import MalaLogo from "common/assets/MalaLogo.png";
import { motion } from "framer-motion";

type SlideshowProps = {
  angle: number;
};

const Slideshow: React.FC<SlideshowProps> = ({ angle }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderImage: "linear-gradient(#6BC2E4,  #FFFFFF) 90",
        borderWidth: "4px",
        borderStyle: "solid",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        bgcolor: "background.paper",
        mt: { xs: 25, lg: 16 },
        zIndex: 5,
      }}
    >
      <Box
        component={motion.div}
        sx={{
          height: 100,
          width: "100vw",
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          p: 2,
        }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[
          "$MAGA",
          "$MAGA",
          "$MAGA",
          "$MAGA",
          "$MAGA",
          "$MAGA",
          "$MAGA",
          "$MAGA",
          "$MAGA",
          "$MAGA",
          "$MAGA",
          "$MAGA",
          "$MAGA",
        ].map((_word, index) => (
          <Grid container key={index}>
            <Grid item sx={{ mx: 6 }}>
              <Card
                key={index}
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: 2,
                }}
              >
                <Stack spacing={2} direction="row" alignItems="center">
                  <Avatar src={MalaLogo} sx={{ height: 60, width: 60 }} />
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      color: "white",
                    }}
                  >
                    $MALA
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

const SlideShowSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Slideshow angle={5} />
      <Slideshow angle={-3} />
    </Box>
  );
};

export default SlideShowSection;
