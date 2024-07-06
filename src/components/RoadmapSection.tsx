import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Avatar, Chip, Grid, List, ListItem, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AdamSmithImage from "common/assets/AdamSmith.jpg";
import HayekImage from "common/assets/hayek1.png";
import JavierMileiImage from "common/assets/JavierMilei.jpg";
import LudwinVonMisesImage from "common/assets/LudwinVonMises.jpg";
import FriedmanImage from "common/assets/MiltonFriedman.jpg";
import RothbardImage from "common/assets/Rothbard.png";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import AnimateWhileView from "common/components/AnimateWhileView";
import Section from "common/components/Section";

const TIMELINE_INFO = [
  {
    id: 1,
    date: "",
    title: "Phase 1: “Adam Smith”",
    imageUrl: AdamSmithImage,
    items: [
      {
        text: "Define the project's vision and mission. Establish short-term, medium-term, and long-term objectives.",
        isComplete: true,
      },
      {
        text: "Start community-building campaigns with engaging content promoting economic freedom and individual liberty inspired by leaders like Javier Milei",
        isComplete: true,
      },
      {
        text: "Launch official channels on Twitter, Telegram, and Instagram.",
        isComplete: true,
      },
      {
        text: "Launch official Website.",
        isComplete: true,
      },
    ],
  },
  {
    id: 2,
    date: "",
    title: "Phase 2: “Friedrich Hayek”",
    imageUrl: HayekImage,
    items: [
      { text: "Token Launch on MoonShot.", isComplete: true },
      { text: "DexScreener & DexTools Ads.", isComplete: true },
      { text: "BirdEye Ads.", isComplete: false },
      { text: "1,000 Holders", isComplete: false },
      { text: "500 Twitter & Instagram Followers.", isComplete: false },
      { text: "Expand the Community", isComplete: false },
    ],
  },
  {
    id: 3,
    date: "",
    title: "Phase 3: “Murray Rothbard”",
    imageUrl: RothbardImage,
    items: [
      { text: "5,000 Holders", isComplete: false },
      { text: "1000 Twitter & Instagram Followers.", isComplete: false },
      {
        text: "Keep growing the community and adding partnerships with influencers.",
        isComplete: false,
      },
      {
        text: "CoinMarketCap Listing.",
        isComplete: false,
      },
      {
        text: "CoinGecko Listing.",
        isComplete: false,
      },
      {
        text: "MEXC Listing.",
        isComplete: false,
      },
    ],
  },
  {
    id: 4,
    date: "",
    title: "Phase 4: “Milton Friedman”",
    imageUrl: FriedmanImage,
    items: [
      { text: "10,000 Holders", isComplete: false },
      {
        text: "Start donations to ONGs to help the most needy dogs.",
        isComplete: false,
      },
      {
        text: "New CEXs Listings",
        isComplete: false,
      },
      {
        text: "10,000 Twitter & Instagram Followers",
        isComplete: false,
      },
    ],
  },
  {
    id: 5,
    date: "",
    title: "Phase 5: “Ludwin Von Mises”",
    imageUrl: LudwinVonMisesImage,
    items: [
      {
        text: "20,000 Holders",
        isComplete: false,
      },
      { text: "50,000 Twitter & Instagram Followers", isComplete: false },
      {
        text: "Continue Expanding the Freedom Ideas",
        isComplete: false,
      },
      {
        text: "Publish Educational Articles on our blog",
        isComplete: false,
      },
      {
        text: "New Partnerships & Influencers",
        isComplete: false,
      },
    ],
  },
  {
    id: 6,
    date: "",
    title: "Phase 6: “Javier Milei”",
    imageUrl: JavierMileiImage,
    items: [
      {
        text: "50,000 Holders",
        isComplete: false,
      },
      { text: "100,000 Twitter & Instagram Followers", isComplete: false },
      {
        text: "Create Educational Videos on the Fundamentals of Libertarian Economics",
        isComplete: false,
      },
      {
        text: "Launch Libertarian NFTs",
        isComplete: false,
      },
      {
        text: "Launch the First Web3 Libertarian Economic School.",
        isComplete: false,
      },
    ],
  },
];

const RoadmapSection = () => {
  return (
    <Section id="Roadmap">
      <Stack spacing={2} alignItems="center">
        <Chip
          label="Pathway to Success"
          variant="outlined"
          sx={{ maxWidth: 200 }}
        />
        <AnimatedTitle text="Roadmap" />
        <AnimatedSubtitle
          text="Welcome to our roadmap, a visual representation of our journey towards success and growth. This roadmap outlines our strategic objectives and milestones as we navigate the dynamic landscape of the cryptocurrency market and strive to achieve our vision."
          sx={{ maxWidth: 500, textAlign: "center" }}
        />
      </Stack>
      <Grid container justifyContent="center" mt={7}>
        <Grid item xs={10}>
          <Timeline position="alternate">
            {TIMELINE_INFO.map((item) => (
              <TimelineItem key={item.id}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="caption"
                  color="text.primary"
                >
                  {item.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot sx={{ p: 0 }}>
                    <Avatar
                      src={item.imageUrl}
                      sx={{ p: 0, height: 75, width: 75 }}
                    />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <AnimateWhileView
                    anchor={item.id % 2 === 0 ? "left" : "right"}
                  >
                    <Typography variant="h6" sx={{ width: 1 }} component="span">
                      {item.title}
                    </Typography>
                    <List dense>
                      {item.items.map((nestedItem, i) => (
                        <ListItem key={i}>
                          <Stack direction="row" spacing={1}>
                            <Avatar
                              sx={{
                                height: 20,
                                width: 20,
                                bgcolor: "background.paper",
                              }}
                            >
                              {nestedItem.isComplete ? (
                                <CheckCircleIcon color="primary" />
                              ) : (
                                <RadioButtonUncheckedIcon />
                              )}
                            </Avatar>
                            <Typography variant="body2">
                              {nestedItem.text}
                            </Typography>
                          </Stack>
                        </ListItem>
                      ))}
                    </List>
                  </AnimateWhileView>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </Section>
  );
};

export default RoadmapSection;
