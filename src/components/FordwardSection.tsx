import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar, Button, Chip, Grid, Stack } from "@mui/material";
import MagaIcon from "common/assets/MagaLogo.png";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import AnimateWhileView from "common/components/AnimateWhileView";
import RedesSociales from "common/components/RedesSociales";
import Section from "common/components/Section";

const FordwardSection = () => {
  return (
    <Section id="Home">
      <Grid container spacing={4} pt={7}>
        <Grid item xs>
          <AnimateWhileView anchor="left">
            <Avatar src={MagaIcon} sx={{ height: 480, width: 480 }} />
          </AnimateWhileView>
        </Grid>
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
              <Button
                variant="contained"
                startIcon={<ShoppingCartOutlinedIcon />}
                size="large"
                sx={{ maxWidth: 200, textTransform: "none" }}
              >
                Buy on Solana
              </Button>
              <RedesSociales />
            </Stack>
          </AnimateWhileView>
        </Grid>
      </Grid>
    </Section>
  );
};

export default FordwardSection;
