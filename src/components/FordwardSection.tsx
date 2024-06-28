import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, Chip, Grid, Hidden, Stack } from "@mui/material";
import AnimatedMalaCoin from "common/components/AnimatedMalaCoin";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import AnimateWhileView from "common/components/AnimateWhileView";
import RedesSociales from "common/components/RedesSociales";
import Section from "common/components/Section";

const FordwardSection = () => {
  return (
    <Section id="Home">
      <Grid container spacing={4} pt={7}>
        <Hidden smDown>
          <Grid item xs>
            <AnimateWhileView anchor="left">
              <AnimatedMalaCoin />
            </AnimateWhileView>
          </Grid>
        </Hidden>
        <Grid item xs>
          <AnimateWhileView anchor="right">
            <Stack spacing={3}>
              <Stack direction="row">
                <Chip
                  label="Introducing"
                  variant="outlined"
                  sx={{ maxWidth: 120 }}
                />
              </Stack>

              <AnimatedTitle
                text="$MALA Movement on the BlockChain"
                primaryWord="$MALA"
              />
              <AnimatedSubtitle text="Inspired by the revolutionary ideas of Javier Milei, $MALA (Make Argentina Libertarian Again) promote economic freedom and advocate for free market policies. Our mission extends beyond financial growth, supporting social causes like improving the lives of stray dogs in Argentina. We aim to create a decentralized ecosystem rooted in individual liberty and economic empowerment." />
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartOutlinedIcon />}
                  size="large"
                  sx={{ maxWidth: 200, textTransform: "none" }}
                >
                  Buy on Solana
                </Button>
                <Button
                  variant="text"
                  endIcon={<ArrowForwardIcon />}
                  size="large"
                  sx={{
                    maxWidth: 200,
                    textTransform: "none",
                    color: "white",
                  }}
                >
                  WhitePaper
                </Button>
              </Stack>
              <RedesSociales />
            </Stack>
          </AnimateWhileView>
        </Grid>
      </Grid>
    </Section>
  );
};

export default FordwardSection;
