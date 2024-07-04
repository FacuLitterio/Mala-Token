import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import SolanaImage from "common/assets/Solana-Logo-200px-150x150.png";
import AnimatedTitle from "common/components/AnimatedTitle";
import Section from "common/components/Section";

const ACCORDION_ITEMS = [
  {
    id: 1,
    title: "1. Download & Install Phantom",
    description:
      "First, you need to download and install the Phantom wallet. It's a secure and user-friendly wallet designed specifically for the Solana blockchain. Available for both desktop and mobile, it allows you to manage your Solana assets with ease.",
  },
  {
    id: 2,
    title: "2. Purchase some Solana",
    description:
      "Next, you'll need to acquire some Solana (SOL), the native cryptocurrency of the Solana network. You can purchase SOL on popular exchanges such as Binance, Coinbase, or Kraken. Transfer the purchased SOL to your Phantom wallet.",
  },
  {
    id: 3,
    title: "3. Swap Your SOL for MALA",
    description:
      "With SOL in your Phantom wallet, you're ready to swap it for MALA tokens. Head over to a decentralized exchange (DEX) like Serum or Raydium, connect your Phantom wallet, and exchange your SOL for MALA. Make sure to review the transaction details before confirming.",
  },
  {
    id: 4,
    title: "4. Join the Best Community Ever",
    description:
      "Finally, join our vibrant and supportive community! Engage with other MALA holders on social media platforms and community forums. Participate in discussions, share your experiences, and stay updated with the latest news and events. Welcome to the best community ever!",
  },
];
const HowBuySection = () => {
  return (
    <Section id="HowBuy">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Stack alignItems="center">
            <Avatar src={SolanaImage} sx={{ height: 75, width: 75 }} />
            <AnimatedTitle text="How Buy Using $SOL" />
            <Box sx={{ mt: 4 }}>
              {ACCORDION_ITEMS.map((item) => (
                <Accordion
                  key={item.id}
                  sx={{ bgcolor: "text.primary", color: "#444444" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    {item.title}
                  </AccordionSummary>
                  <AccordionDetails>{item.description}</AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
};

export default HowBuySection;
