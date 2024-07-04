import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Avatar, Button, Chip, Grid, Hidden, Stack } from "@mui/material";
import Image from "common/assets/OurMissionMilei.jpg";
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
              <Avatar
                src={Image}
                sx={{ height: 500, width: 380 }}
                variant="rounded"
              />
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
              <AnimatedSubtitle text="Introducing our groundbreaking token, engineered to captivate the world and revolutionize the way we view economic freedom and free market policies, drawing inspiration from the visionary economist Javier Milei. Our mission transcends mere financial success; we are dedicated to making a profound impact on society and the world at large." />
              <AnimatedSubtitle text="Our project stands at the intersection of innovation, economic empowerment, and social responsibility. By investing in our token, you are not only participating in a financial revolution but also contributing to a noble cause that seeks to make a tangible difference in the world. Join us in championing economic freedom, decentralization, and the well-being of stray dogs. Together, we can create a future that is prosperous, inclusive, and compassionate." />
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
