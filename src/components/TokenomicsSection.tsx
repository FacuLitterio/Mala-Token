import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Chip,
  Grid,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import { PieChart } from "@mui/x-charts/PieChart";
import MoonShotImage from "common/assets/MoonShot.png";
import SolScanLogo from "common/assets/SolScan.png";
import AnimatedTitle from "common/components/AnimatedTitle";
import AnimateWhileView from "common/components/AnimateWhileView";
import Section from "common/components/Section";
import useCopyClipboard from "common/hooks/useCopyClipboard";
import { useCallback, useState } from "react";

const SOLANA_CA = import.meta.env.VITE_SOLANA_CA;

const TOTAL_SUPPLY = 120000000;
const TOKENOMICS = [
  { label: "CEO & Founder - 20%", value: TOTAL_SUPPLY * 0.2 },
  { label: "Donations - 30%", value: TOTAL_SUPPLY * 0.3 },
  { label: "Team & Development - 20%", value: TOTAL_SUPPLY * 0.2 },
  { label: "Marketing & Partnerships - 30%", value: TOTAL_SUPPLY * 0.3 },
];

const TokenomicsSection = () => {
  const theme = useTheme();
  const onCopyClipboard = useCopyClipboard();
  const [value, setValue] = useState("2");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const SolScanAvatar: React.FC<{ walletAddress: string | null }> = ({
    walletAddress,
  }) => {
    const handleOpenSolScan = useCallback(() => {
      if (!walletAddress) return;

      const URL = `https://solscan.io/account/${walletAddress}`;

      window.open(URL, "_blank");
    }, [walletAddress]);

    if (!walletAddress) return null;

    return (
      <IconButton onClick={handleOpenSolScan} size="small">
        <Avatar src={SolScanLogo} sx={{ height: 25, width: 25 }} />
      </IconButton>
    );
  };

  return (
    <Section id="Tokenomics">
      <Stack spacing={2} alignItems="center">
        <Chip
          label="Trust & Transparency"
          variant="outlined"
          sx={{ maxWidth: 200 }}
        />
        <AnimatedTitle text="Tokenomics" />
        <AnimateWhileView anchor="left">
          <Chip
            label="1,000,000,000 SUPPLY"
            sx={{
              p: 4,
              color: "primary.main",
              bgcolor: "#FFF",
              borderRadius: 1,
              fontSize: { xs: "1.2rem", md: "1.5rem", lg: "2.4rem" },
              fontWeight: 900,
            }}
          />
        </AnimateWhileView>
        <AnimateWhileView anchor="left">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h5" color="text.primary">
              Launch on
            </Typography>
            <img src={MoonShotImage} height={40} width={180} />
          </Stack>
        </AnimateWhileView>
        <Grid
          container
          justifyContent="center"
          sx={{ pt: { xs: 3, md: 5 } }}
          rowSpacing={3}
        >
          <Grid item xs={12} md={3}>
            <Stack alignItems="center">
              <AnimatedTitle
                text="LP Burned"
                variant="h3"
                color="text.primary"
              />
              <AnimatedTitle
                text="100%"
                variant="h3"
                color="text.primary"
                fontWeight={600}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack alignItems="center">
              <AnimatedTitle text="Tax" variant="h3" color="text.primary" />
              <AnimatedTitle
                text="0%"
                variant="h3"
                color="text.primary"
                fontWeight={600}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack alignItems="center">
              <AnimatedTitle
                text="Ownership"
                variant="h3"
                color="text.primary"
              />
              <AnimatedTitle
                text="Renounced"
                variant="h3"
                color="text.primary"
                fontWeight={600}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack alignItems="center">
              <AnimatedTitle text="PreSale" variant="h3" color="text.primary" />
              <AnimatedTitle
                text="No"
                variant="h3"
                color="text.primary"
                fontWeight={600}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Stack spacing={2} alignItems="center" sx={{ mt: 5 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="Token Info"
                value="1"
                sx={{
                  color: value !== "1" ? "white" : undefined,
                  textTransform: "none",
                }}
              />
              <Tab
                label="Team Distribution"
                value="2"
                sx={{
                  color: value !== "2" ? "white" : undefined,
                  textTransform: "none",
                }}
              />
              <Tab
                label="Wallets Distribution"
                value="3"
                sx={{
                  color: value !== "3" ? "white" : undefined,
                  textTransform: "none",
                }}
              />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{
              width: 1,
            }}
          >
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} md={10} lg={8}>
                <List sx={{ bgcolor: "#FFF" }}>
                  <ListItem divider>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ width: 1 }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Symbol
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        $MALA
                      </Typography>
                    </Stack>
                  </ListItem>
                  <ListItem divider>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ width: 1 }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Network
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Solana
                      </Typography>
                    </Stack>
                  </ListItem>
                  <ListItem divider>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ width: 1 }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Total Supply
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        1,000,000,000 $MALA
                      </Typography>
                    </Stack>
                  </ListItem>
                  <ListItem divider>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ width: 1 }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Contract Address
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {SOLANA_CA}
                        <IconButton onClick={() => onCopyClipboard(SOLANA_CA)}>
                          <ContentCopyIcon />
                        </IconButton>
                      </Typography>
                    </Stack>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </TabPanel>
          {value === "2" && (
            <TabPanel
              value="2"
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Stack spacing={10} alignItems="center" width={1}>
                <Alert
                  variant="outlined"
                  severity="info"
                  sx={{ width: 1, maxWidth: 750 }}
                >
                  <AlertTitle sx={{ color: "text.primary" }}>
                    Important
                  </AlertTitle>
                  <Typography variant="body2" paragraph color="text.primary">
                    We are committed to transparency and building trust. This
                    project is not a scam; it is a serious, trustworthy venture.
                    To prove our commitment,{" "}
                    <b>
                      {" "}
                      the team will only purchase 120M Tokens at the time of the
                      token launch on MoonShot and will not buy more
                    </b>
                    . The tokens will be distributed into the wallets when
                    liquidity migrates to Raydium. We will also share the
                    addresses of the wallets where the tokens are distributed.
                    This ensures full transparency and fairness.
                  </Typography>
                </Alert>
                <Box
                  sx={{
                    height: 300,
                    width: 1,
                    maxWidth: 700,
                  }}
                >
                  <PieChart
                    sx={{
                      width: 1,
                      maxWidth: 800,
                    }}
                    colors={[
                      theme.palette.primary.main,
                      "#FF6B6B",
                      "#FFC857",
                      "#A3DE83",
                      "#B990DA",
                      "#136F63",
                    ]}
                    series={[
                      {
                        data: TOKENOMICS,
                        innerRadius: 50,
                        paddingAngle: 5,
                        cornerRadius: 15,
                        cx: 150,
                        cy: 150,
                        highlightScope: {
                          faded: "global",
                          highlighted: "item",
                        },
                        faded: {
                          innerRadius: 30,
                          additionalRadius: -30,
                          color: "gray",
                        },
                      },
                    ]}
                    margin={{ right: 5 }}
                  />
                </Box>
              </Stack>
            </TabPanel>
          )}
          <TabPanel value="3" sx={{ width: 1 }}>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} md={10} lg={8}>
                <List sx={{ bgcolor: "#FFF" }}>
                  <ListItem divider>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ width: 1 }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        CEO & Founder Wallet [Token Creator]
                      </Typography>
                      <Stack direction="row" alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                          {import.meta.env.VITE_CEO_WALLET_CA}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() =>
                            onCopyClipboard(import.meta.env.VITE_CEO_WALLET_CA)
                          }
                        >
                          <ContentCopyIcon />
                        </IconButton>
                        <SolScanAvatar
                          walletAddress={import.meta.env.VITE_CEO_WALLET_CA}
                        />
                      </Stack>
                    </Stack>
                  </ListItem>
                  <ListItem divider>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ width: 1 }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Donations Wallet
                      </Typography>
                      <Stack direction="row" alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                          {import.meta.env.VITE_DONATIONS_WALLET_CA}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() =>
                            onCopyClipboard(
                              import.meta.env.VITE_DONATIONS_WALLET_CA
                            )
                          }
                        >
                          <ContentCopyIcon />
                        </IconButton>
                        <SolScanAvatar
                          walletAddress={
                            import.meta.env.VITE_DONATIONS_WALLET_CA
                          }
                        />
                      </Stack>
                    </Stack>
                  </ListItem>
                  <ListItem divider>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ width: 1 }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Marketing & Partnerships
                      </Typography>
                      <Stack direction="row" alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                          {import.meta.env.VITE_MARKETING_WALLET_CA}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() =>
                            onCopyClipboard(
                              import.meta.env.VITE_MARKETING_WALLET_CA
                            )
                          }
                        >
                          <ContentCopyIcon />
                        </IconButton>
                        <SolScanAvatar
                          walletAddress={
                            import.meta.env.VITE_MARKETING_WALLET_CA
                          }
                        />
                      </Stack>
                    </Stack>
                  </ListItem>
                  <ListItem divider>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ width: 1 }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Team & Development
                      </Typography>
                      <Stack direction="row" alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                          {import.meta.env.VITE_TEAM_WALLET_CA}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() =>
                            onCopyClipboard(import.meta.env.VITE_TEAM_WALLET_CA)
                          }
                        >
                          <ContentCopyIcon />
                        </IconButton>
                        <SolScanAvatar
                          walletAddress={import.meta.env.VITE_TEAM_WALLET_CA}
                        />
                      </Stack>
                    </Stack>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Stack>
    </Section>
  );
};

export default TokenomicsSection;
