import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import { IconButton, Stack } from "@mui/material";
import React from "react";

export const FACEBOOK_URL = "";
export const INSTAGRAM_URL = "";

const RedesSociales: React.FC<{ color?: string }> = (props) => {
  const { color = "text.primary" } = props;
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        sx={{
          color,
        }}
      >
        <XIcon />
      </IconButton>
      <IconButton
        sx={{
          color,
        }}
      >
        <TelegramIcon />
      </IconButton>
      <IconButton
        sx={{
          color,
        }}
      >
        <InstagramIcon />
      </IconButton>
    </Stack>
  );
};

export default RedesSociales;
