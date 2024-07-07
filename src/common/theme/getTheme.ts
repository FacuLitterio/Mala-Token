import { PaletteMode, ThemeOptions } from "@mui/material";

const commonTokens = (): ThemeOptions["palette"] => ({
  primary: {
    main: "#71A7D9",
  },
  background: {
    paper: "#070707",
  },
  text: {
    primary: "#FFFFFF",
  },
});

const getTheme = (mode: PaletteMode): ThemeOptions => {
  return {
    typography: {
      fontFamily: "Sriracha, cursive",
    },
    components: {
      MuiButton: {
        defaultProps: {
          sx: {
            textTransform: "none",
          },
          disableElevation: true,
        },
      },
    },
    palette: {
      mode,
      ...commonTokens(),
    },
  };
};

export default getTheme;
