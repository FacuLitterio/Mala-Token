import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Box,
  IconButton,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import BanderaArgentina from "common/assets/banderaargentina.jpg";
import { SOLANA_ADRESS } from "constants";
import { useSnackbar } from "notistack";

const FlagSection = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(SOLANA_ADRESS);
    enqueueSnackbar("Copied");
  };
  return (
    <Box
      sx={{
        minHeight: 600,
        width: 1,
        mt: 18,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${BanderaArgentina})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.05,
          backgroundRepeat: "no-repeat",
        }}
      />
      <Paper
        sx={{
          width: 700,
          height: 350,
          zIndex: 10,
          p: 4,
          border: (theme) => `4px solid ${theme.palette.primary.main}`,
        }}
      >
        <Stack spacing={6}>
          <Stack spacing={1} alignItems="center">
            <Rating
              defaultValue={5}
              readOnly
              size="large"
              sx={{ color: (theme) => theme.palette.primary.main }}
            />
            <Typography variant="h3">$MALA MemeCoin</Typography>
            <Typography variant="h4">
              ~ Make Argentina Libertarian Again ~
            </Typography>
          </Stack>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h5">Solana Network</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="subtitle1">{SOLANA_ADRESS}</Typography>
              <IconButton color="inherit" onClick={handleCopyToClipboard}>
                <ContentCopyIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default FlagSection;
