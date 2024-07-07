import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Hidden,
  Stack,
  Typography,
} from "@mui/material";
import IntroVideo from "common/assets/IntroVideo2.mp4";
import MoonShotImage from "common/assets/MoonShot.png";
import MoonShotSVG from "common/assets/MoonShotSVG.svg";
import AnimatedMalaCoin from "common/components/AnimatedMalaCoin";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import AnimateWhileView from "common/components/AnimateWhileView";
import RedesSociales from "common/components/RedesSociales";
import Section from "common/components/Section";
import { useCallback } from "react";

const FordwardSection = () => {
  const handleClickBuyOnPhotom = useCallback(() => {
    const URL = import.meta.env.VITE_PHOTOM_MALA_URL;
    if (!URL) return;
    window.open(URL, "_blank");
  }, []);

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        p: 3,
      }}
    >
      <Box
        component="video"
        autoPlay
        loop
        muted
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "650px", lg: "750px" },
          objectFit: "cover",
          zIndex: 1,
        }}
      >
        <source src={IntroVideo} type="video/mp4" />
      </Box>
      <Section
        id="Home"
        sx={{
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
          p: 0,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
          },
        }}
      >
        <Grid
          container
          spacing={4}
          pt={7}
          sx={{ position: "relative", zIndex: 3 }}
        >
          <Hidden smDown>
            <Grid item xs>
              <AnimateWhileView anchor="left">
                <AnimatedMalaCoin />
              </AnimateWhileView>
            </Grid>
          </Hidden>
          <Grid item xs>
            <AnimateWhileView anchor="right">
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Chip
                    label="Introducing"
                    variant="outlined"
                    avatar={<Avatar src={MoonShotSVG} />}
                    sx={{ maxWidth: 150 }}
                  />
                </Stack>
                <AnimatedTitle
                  text="$MALA Movement on the BlockChain"
                  primaryWord="$MALA"
                />
                <AnimatedSubtitle text="Inspired by the revolutionary ideas of Javier Milei, $MALA (Make Argentina Libertarian Again) promotes economic freedom and advocates for free market policies. Our mission extends beyond financial interests, supporting social causes like improving the lives of stray dogs in Argentina. We aim to create a decentralized ecosystem rooted in individual liberty and economic empowerment. $MALA offers a unique way to support libertarian principles and contribute to charitable causes, without any promise of financial return or investment potential. This token is purely for entertainment and advocacy purposes." />
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartOutlinedIcon />}
                    size="large"
                    onClick={handleClickBuyOnPhotom}
                    sx={{ maxWidth: 200, textTransform: "none" }}
                  >
                    Buy on Solana
                  </Button>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Typography variant="subtitle2" color="text.primary">
                      Launch on
                    </Typography>
                    <img src={MoonShotImage} height={20} width={80} />
                  </Stack>
                </Stack>
                <RedesSociales />
              </Stack>
            </AnimateWhileView>
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
};

export default FordwardSection;
