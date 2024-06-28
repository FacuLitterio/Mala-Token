import { Chip, Grid, Stack, Typography } from "@mui/material";
import ARAFImage from "common/assets/ARAF-Donations.png";
import DogsImage from "common/assets/Dogs.jpg";
import EveryDonationsImage from "common/assets/everyDonationsOrg.png";
import PatitasImage from "common/assets/PatitasSVLogo.png";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import AnimateWhileView from "common/components/AnimateWhileView";
import Section from "common/components/Section";
import SlideShow from "common/components/SlideShow";

const DONATIONS_INFO = [
  {
    id: 1,
    avatar: DogsImage,
    title: "Proyecto 4 Pico",
    subtitle: "Buenos Aires, Argentina",
    description:
      "Estamos dedicados a apoyar el bienestar animal a través de donaciones a organizaciones benéficas locales. Con su ayuda, podemos hacer una diferencia significativa en la vida de muchos animales necesitados.",
    type: "Crypto",
    date: "???",
    target: "10,000 Holders",
    frequency: "One-Time",
    amount: "2 ETH",
  },
  {
    id: 2,
    avatar: ARAFImage,
    title: "ARAF",
    subtitle: "Ushuaia, Argentina",
    description:
      "ARAF es una Asociación sin fines de lucro, dedicados a la protección de los animales y a la lucha del respeto por su vida, contra la eutanasia, el maltrato, el sufrimiento, el abandono y a favor del control de su reproducción con métodos éticos.",
    type: "Crypto",
    date: "???",
    target: "50,000 Holders",
    frequency: "One-Time",
    amount: "4 ETH",
  },
  {
    id: 3,
    avatar: PatitasImage,
    title: "Patitas de San Vicente",
    subtitle: "Buenos Aires, Argentina",
    description:
      "Rescate, recupero, castración y adopción responsable de perros abandonados y maltratados. Concientización sobre tenencia responsable de perros y gatos.",
    type: "Crypto",
    date: "???",
    target: "100,000 Holders",
    frequency: "One-Time",
    amount: "8 ETH",
  },
];

const DonationsSection = () => {
  return (
    <Section id="Donations">
      <Stack width={1} alignItems="center" rowGap={5}>
        <Chip
          label="Supporting Stray Dogs"
          variant="outlined"
          sx={{ maxWidth: 200 }}
        />
        <AnimatedTitle text="Donations" />
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <AnimatedTitle
                text="Commitment to Animal Welfare"
                variant="h4"
                color="text.primary"
              />
              <AnimatedSubtitle
                variant="body1"
                color="text.primary"
                paragraph
                text={`Inspired by Javier Milei's deep affection for dogs and his
                unwavering commitment to animal welfare, we have dedicated a
                portion of our token's proceeds to support stray dogs in
                Argentina. Recognizing the invaluable bond between humans and
                dogs, we aim to improve the living conditions of homeless dogs,
                providing them with the care and resources they need.`}
              />
              <br />
              <AnimatedSubtitle
                variant="body1"
                color="text.primary"
                paragraph
                text={`Our mission extends beyond financial success; we are committed
                to making a tangible difference in the lives of these loyal
                companions. By donating to animal shelters and funding
                initiatives that provide food, medical care, and shelter, we
                strive to create a better world for stray dogs.`}
              />
              <br />
              <AnimatedSubtitle
                variant="body1"
                color="text.primary"
                paragraph
                text={`Join us in honoring Javier Milei's love for dogs by
                contributing to this cause. Together, we can ensure that no dog
                is left behind, bringing hope and compassion to those who need
                it most.`}
              />
              <AnimateWhileView anchor="left">
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ pt: 5 }}
                  alignItems="center"
                >
                  <Typography variant="h5" color="text.primary">
                    Will Verify Donations on
                  </Typography>
                  <img src={EveryDonationsImage} height={50} width={200} />
                </Stack>
              </AnimateWhileView>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <AnimateWhileView anchor="right">
              <SlideShow data={DONATIONS_INFO} autoplay={false} />
            </AnimateWhileView>
          </Grid>
        </Grid>
      </Stack>
    </Section>
  );
};

export default DonationsSection;
