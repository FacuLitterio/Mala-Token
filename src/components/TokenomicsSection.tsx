import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
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
import AnimatedTitle from "common/components/AnimatedTitle";
import Section from "common/components/Section";
import {
  COMMUNITY_WALLET_CONTRACT_ADRESS,
  DONATIONS_WALLET_CONTRACT_ADRESS,
  MARKETING_WALLET_CONTRACT_ADRESS,
  SOLANA_CONTRACT_ADRESS,
  TEAM_WALLET_CONTRACT_ADRESS,
} from "constants";
import { useSnackbar } from "notistack";
import { useState } from "react";

const TOKENOMICS = [
  { label: "LP Burned - 950,000,000 $MALA", value: 950000000 },
  { label: "Donations - 20,000,000 $MALA", value: 20000000 },
  { label: "Marketing & Partnerships - 10,000,000 $MALA", value: 10000000 },
  {
    label: "Community Rewards & Airdrops - 10,000,000 $MALA",
    value: 10000000,
  },
  { label: "Team & Development - 10,000,000 $MALA", value: 10000000 },
];

const TokenomicsSection = () => {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    enqueueSnackbar("Copied");
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
        <Chip
          label="1,000,000,000 SUPPLY"
          sx={{
            p: 4,
            color: "primary.main",
            bgcolor: "#FFF",
            borderRadius: 1,
            fontSize: "2.4rem",
            fontWeight: 900,
          }}
        />
        <Grid container justifyContent="center" sx={{ pt: 5 }}>
          <Grid item xs>
            <Stack alignItems="center">
              <Typography variant="h3" color="text.primary">
                LP Burned
              </Typography>
              <Typography variant="h2" color="text.primary" fontWeight={600}>
                100%
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs>
            <Stack alignItems="center">
              <Typography variant="h3" color="text.primary">
                Ownership
              </Typography>
              <Typography variant="h2" color="text.primary" fontWeight={600}>
                Renounced
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs>
            <Stack alignItems="center">
              <Typography variant="h3" color="text.primary">
                Tax
              </Typography>
              <Typography variant="h2" color="text.primary" fontWeight={600}>
                1%
              </Typography>
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
                label="Token Distribution"
                value="2"
                sx={{
                  color: value !== "2" ? "white" : undefined,
                  textTransform: "none",
                }}
              />
              <Tab
                label="Holding Wallets"
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
              <Grid item xs={6}>
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
                        {SOLANA_CONTRACT_ADRESS}
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
              <Box
                sx={{
                  minHeight: 320,
                  width: 1,
                  maxWidth: 800,
                }}
              >
                <PieChart
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
                      highlightScope: { faded: "global", highlighted: "item" },
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
            </TabPanel>
          )}

          <TabPanel value="3" sx={{ width: 1 }}>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={8}>
                <List sx={{ bgcolor: "#FFF" }}>
                  <ListItem divider>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ width: 1 }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Donations
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {DONATIONS_WALLET_CONTRACT_ADRESS}
                        <IconButton
                          onClick={() =>
                            copyToClipboard(DONATIONS_WALLET_CONTRACT_ADRESS)
                          }
                        >
                          <ContentCopyIcon />
                        </IconButton>
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
                        Marketing & Partnerships
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {MARKETING_WALLET_CONTRACT_ADRESS}
                        <IconButton
                          onClick={() =>
                            copyToClipboard(MARKETING_WALLET_CONTRACT_ADRESS)
                          }
                        >
                          <ContentCopyIcon />
                        </IconButton>
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
                        Community Rewards & Airdrops
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {COMMUNITY_WALLET_CONTRACT_ADRESS}
                        <IconButton
                          onClick={() =>
                            copyToClipboard(COMMUNITY_WALLET_CONTRACT_ADRESS)
                          }
                        >
                          <ContentCopyIcon />
                        </IconButton>
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
                        Team & Development
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {TEAM_WALLET_CONTRACT_ADRESS}
                        <IconButton
                          onClick={() =>
                            copyToClipboard(TEAM_WALLET_CONTRACT_ADRESS)
                          }
                        >
                          <ContentCopyIcon />
                        </IconButton>
                      </Typography>
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
