import { ThemeProvider } from "@emotion/react";
import {
  Box,
  CssBaseline,
  PaletteMode,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import DrawerMenu from "common/components/DrawerMenu";
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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
          <RoadmapSection />
          <HowBuySection />
          <PrivacyPolicySection />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
