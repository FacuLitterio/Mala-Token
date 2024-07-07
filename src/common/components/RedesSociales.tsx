import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import { Avatar, IconButton, Stack } from "@mui/material";
import DexScreenerSVG from "common/assets/DexScreenerSVG.png";
import DexToolsSVG from "common/assets/DexToolsSVG.svg";
import React, { useCallback } from "react";

const X_URL = import.meta.env.VITE_X_URL;
const TELEGRAM_URL = import.meta.env.VITE_TELEGRAM_URL;
const DEXSCREENER_URL = import.meta.env.VITE_DEXSCREENER_URL;
const DEXTOOLS_URL = import.meta.env.VITE_DEXTOOLS_URL;

const RedesSociales: React.FC<{ color?: string }> = (props) => {
  const { color = "text.primary" } = props;

  const handleClickURL = useCallback((url: string | null) => {
    if (!url) return;

    window.open(url, "_blank");
  }, []);

  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        onClick={() => handleClickURL(X_URL)}
        sx={{
          color,
        }}
      >
        <XIcon />
      </IconButton>
      <IconButton
        onClick={() => handleClickURL(TELEGRAM_URL)}
        sx={{
          color,
        }}
      >
        <TelegramIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={() => handleClickURL(DEXSCREENER_URL)}>
        <Avatar src={DexScreenerSVG} />
      </IconButton>
      <IconButton onClick={() => handleClickURL(DEXTOOLS_URL)}>
        <Avatar src={DexToolsSVG} sx={{ width: 25, height: 25 }} />
      </IconButton>
    </Stack>
  );
};

export default RedesSociales;
