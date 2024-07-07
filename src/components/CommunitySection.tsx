import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LaunchIcon from "@mui/icons-material/Launch";
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CoinMarketCapLogo from "common/assets/CoinMarketCapLogo.png";
import CommunityImage from "common/assets/CommunityImage.jpg";
import DexScreenerSVG from "common/assets/DexScreenerSVG.png";
import DexToolsSVG from "common/assets/DexToolsColor.png";
import KucoinLogo from "common/assets/KucoinLogo.png";
import TelegramLogo from "common/assets/TelegramLogo.jpg";
import XLogo from "common/assets/xLogo.png";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import AnimateWhileView from "common/components/AnimateWhileView";
import { motion } from "framer-motion";

const partnerships = [
  {
    name: "Telegram",
    icon: <Avatar src={TelegramLogo} sx={{ width: 80, height: 80 }} />,
    url: import.meta.env.VITE_TELEGRAM_URL,
  },
  {
    name: "X | Twitter",
    icon: <Avatar src={XLogo} sx={{ width: 100, height: 100 }} />,
    url: import.meta.env.VITE_X_URL,
  },
  {
    name: "DexScreener",
    icon: <Avatar src={DexScreenerSVG} sx={{ width: 100, height: 100 }} />,
    url: import.meta.env.VITE_DEXSCREENER_URL,
  },
  {
    name: "DexTools",
    icon: <Avatar src={DexToolsSVG} sx={{ width: 100, height: 100 }} />,
    url: import.meta.env.VITE_DEXTOOLS_URL,
  },
  {
    name: "CoinMarketCap",
    icon: <Avatar src={CoinMarketCapLogo} sx={{ width: 80, height: 80 }} />,
    url: import.meta.env.VITE_COINMARKETCAP_URL,
  },
  {
    name: "KuCoin",
    icon: <Avatar src={KucoinLogo} sx={{ width: 80, height: 80 }} />,
    url: import.meta.env.VITE_KUCOIN_URL,
  },
];

const slideUpVariants = {
  animate: {
    y: ["0%", "-100%"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 60, // Duración de cada ciclo de animación
        ease: "linear",
      },
    },
  },
};

const slideDownVariants = {
  animate: {
    y: ["-100%", "100%"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 60, // Duración de cada ciclo de animación
        ease: "linear",
      },
    },
  },
};

const AnimatedBox = motion(Box);

const cardHoverVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const PartnershipCard: React.FC<{
  name: string;
  icon: React.ReactNode;
  url: string;
}> = ({ name, icon, url }) => (
  <AnimatedBox
    sx={{
      height: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "#161616",
      my: 5,
      mx: 3,
      p: 2,
      borderRadius: 4,
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
      cursor: "pointer",
      position: "relative",
    }}
    variants={cardHoverVariants}
    whileHover="hover"
    whileTap={{ scale: 0.9 }}
    onClick={() => !!url && window.open(url, "_blank")}
  >
    <Stack spacing={1} alignItems="center" justifyContent="center">
      {icon}
      <Typography variant="h6">{name}</Typography>
      {!url && (
        <Typography variant="body2" sx={{ color: grey[600] }}>
          ~ Soon ~
        </Typography>
      )}
    </Stack>
    {!!url && (
      <Box sx={{ position: "absolute", top: 10, right: 10 }}>
        <LaunchIcon fontSize="small" sx={{ fill: "#31393c" }} />
      </Box>
    )}
  </AnimatedBox>
);

const CommunitySection = () => {
  const border = "2px solid #31393c";

  return (
    <Grid
      container
      sx={{
        width: 1,
        height: { xs: 500, lg: 650 },
        borderBottom: border,
        borderTop: border,
        mt: 10,
        overflow: "hidden",
      }}
    >
      <Grid container item xs={12} md={5} sx={{ borderRight: border, px: 2 }}>
        <Grid item xs>
          <AnimatedBox variants={slideUpVariants} animate="animate">
            {partnerships.concat(partnerships).map((partner, index) => (
              <PartnershipCard
                key={index}
                name={partner.name}
                icon={partner.icon}
                url={partner.url}
              />
            ))}
          </AnimatedBox>
        </Grid>
        <Grid item xs>
          <AnimatedBox variants={slideDownVariants} animate="animate">
            {partnerships.concat(partnerships).map((partner, index) => (
              <PartnershipCard
                key={index}
                name={partner.name}
                icon={partner.icon}
                url={partner.url}
              />
            ))}
          </AnimatedBox>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          height: 1,
          overflow: "auto",
          px: 6,
          background: `url(${CommunityImage})`,
          backgroundPosition: "0% 50%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      >
        <AnimateWhileView anchor="right">
          <Stack
            spacing={1.5}
            sx={{
              mt: 5,
              p: 4,
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <AnimatedTitle
              variant="h5"
              color="inherit"
              text="We Are on a Mission"
            />
            <AnimatedTitle
              variant="h2"
              color="inherit"
              text="Join the $MALA Army!"
            />
            <AnimatedSubtitle
              variant="body2"
              color="text.primary"
              paragraph
              text="we believe in the power of collaboration. We partner with innovative companies and industry leaders to take our memecoin to new heights. These strategic alliances not only strengthen our community but also drive the growth and adoption of our cryptocurrency. Discover how our collaborations are transforming the future of digital finance."
            />
            <Stack direction="row">
              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowRightAltIcon />}
                sx={{ color: "text.primary", textTransform: "none" }}
                onClick={() =>
                  window.open(import.meta.env.VITE_TELEGRAM_URL, "_blank")
                }
              >
                Join Community
              </Button>
            </Stack>
          </Stack>
        </AnimateWhileView>
      </Grid>
    </Grid>
  );
};

export default CommunitySection;
