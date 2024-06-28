import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Avatar, Button, Chip, Grid, Hidden, Stack } from "@mui/material";
import MagaIcon from "common/assets/MagaLogo.png";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import AnimateWhileView from "common/components/AnimateWhileView";
import Section from "common/components/Section";
import onScrollToSection from "common/helpers/onScrollToSection";

const MissionSection = () => {
  return (
    <Section id="Mission">
      <Grid container justifyContent="center">
        <Hidden smDown>
          <Grid item xs={4} sm={6} md={5}>
            <AnimateWhileView anchor="left">
              <Avatar src={MagaIcon} sx={{ height: 380, width: 380 }} />
            </AnimateWhileView>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={6} md={5}>
          <AnimateWhileView anchor="right">
            <Stack spacing={3}>
              <Chip
                variant="outlined"
                label="Not Just a Coin"
                sx={{ maxWidth: 120 }}
              />
              <AnimatedTitle text="Our Mission" primaryWord="Our" />
              <AnimatedSubtitle text="Introducing a token designed to not only go viral but also champion economic freedom and free market policies inspired by Javier Milei. Our mission extends beyond financial success, as we commit to improving the lives of stray dogs in Argentina. Through decentralization, we empower individuals and promote the adoption of liberal economic policies. A portion of our proceeds will be dedicated to enhancing the living conditions of homeless dogs, reflecting our dedication to social responsibility." />
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{ maxWidth: 150, textTransform: "none" }}
                onClick={() => onScrollToSection("Donations")}
              >
                Learn More
              </Button>
            </Stack>
          </AnimateWhileView>
        </Grid>
      </Grid>
    </Section>
  );
};

export default MissionSection;
