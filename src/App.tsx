import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import {
  Backdrop,
  Button,
  createTheme,
  CssBaseline,
  PaletteMode,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import CustomAudioPlayer from "common/components/AudioPlayer";
import DrawerMenu from "common/components/DrawerMenu";
import CommunitySection from "components/CommunitySection";
import DonationsSection from "components/DonationsSection";
import FlagSection from "components/FlagSection";
import FordwardSection from "components/FordwardSection";
import HowBuySection from "components/HowBuySection";
import MissionSection from "components/MissionSection";
import PrivacyPolicySection from "components/PrivacyPolicySection";
import RoadmapSection from "components/RoadmapSection";
import SlideShowSection from "components/SlideShowSection";
import TokenomicsSection from "components/TokenomicsSection";
import { createContext, useCallback, useMemo, useState } from "react";
import AppBar from "./common/components/AppBar";
import getTheme from "./common/theme/getTheme";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mode, setMode] = useState<PaletteMode>("light");
  const [backdropOpen, setBackdropOpen] = useState(true);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = useMemo(() => createTheme(getTheme(mode)), [mode]);
  theme = responsiveFontSizes(theme);

  const handleChangeMenuOpen = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const handleClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleBackdropClose = () => {
    setBackdropOpen(false);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Backdrop
          sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backdropOpen}
        >
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom>
              Welcome to $MALA
            </Typography>
            <Typography variant="h6" gutterBottom>
              Click the button to enable sound.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<GraphicEqIcon />}
              onClick={handleBackdropClose}
            >
              Enable sound
            </Button>
          </Box>
        </Backdrop>
        {!backdropOpen && (
          <Box
            component="main"
            sx={{
              minHeight: "100vh",
              width: 1,
              display: "flex",
              flexDirection: "column",
              overflowX: "hidden",
              bgcolor: theme.palette.background.paper,
            }}
          >
            <AppBar onChangeMenu={handleChangeMenuOpen} />
            <DrawerMenu isOpen={isMenuOpen} onClose={handleClose} />
            <FordwardSection />
            <SlideShowSection />
            <FlagSection />
            <MissionSection />
            <DonationsSection />
            <TokenomicsSection />
            <CommunitySection />
            <RoadmapSection />
            <HowBuySection />
            <PrivacyPolicySection />
            <CustomAudioPlayer />
          </Box>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
