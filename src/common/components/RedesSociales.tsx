import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import { IconButton, Stack } from "@mui/material";
import React from "react";

const TELEGRAM_URL = "https://t.me/malamemecoin";
const X_URL = "https://x.com/MalaMemecoin";

const RedesSociales: React.FC<{ color?: string }> = (props) => {
  const { color = "text.primary" } = props;
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        onClick={() => window.open(X_URL, "_blank")}
        sx={{
          color,
        }}
      >
        <XIcon />
      </IconButton>
      <IconButton
        onClick={() => window.open(TELEGRAM_URL, "_blank")}
        sx={{
          color,
        }}
      >
        <TelegramIcon />
      </IconButton>
      <IconButton
        disabled
        sx={{
          color,
          "&:disabled": {
            color: "grey.600",
          },
        }}
      >
        <InstagramIcon />
      </IconButton>
    </Stack>
  );
};

export default RedesSociales;
