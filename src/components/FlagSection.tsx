import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import BanderaArgentina from "common/assets/banderaargentina.jpg";
import { useSnackbar } from "notistack";

const SOLANA_CA = import.meta.env.VITE_SOLANA_CA;

const FlagSection = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(SOLANA_CA);
    enqueueSnackbar("Copied");
  };
  return (
    <Grid container p={2}>
      <Grid item xs={12}>
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
              opacity: 0.25,
              backgroundRepeat: "no-repeat",
            }}
          />
          <Paper
            sx={{
              height: 440,
              width: 1,
              maxWidth: 700,
              zIndex: 10,
              background: "rgba(255, 255, 255, 0.2)",
              color: "text.primary",
              borderRadius: 10,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              p: 4,
            }}
          >
            <Stack spacing={10} width={1} alignItems="center">
              <Rating
                defaultValue={5}
                readOnly
                size="large"
                sx={{ color: "#6BC2E4" }}
              />
              <Stack spacing={1} alignItems="center">
                <Typography
                  variant="h3"
                  textAlign="center"
                  sx={{
                    fontSize: { xs: "1.2rem", md: "1.5rem", lg: "1.8rem" },
                  }}
                >
                  $MALA MemeCoin
                </Typography>
                <Typography
                  variant="h4"
                  textAlign="center"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.5rem", lg: "1.8rem" },
                  }}
                >
                  ~ Make Argentina Libertarian Again ~
                </Typography>
              </Stack>
              <Stack spacing={1} alignItems="center">
                <Typography variant="h5">Solana Network</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: {
                        xs: ".6rem",
                        md: "1rem",
                        lg: "1.5rem",
                      },
                    }}
                  >
                    {SOLANA_CA}
                  </Typography>
                  <IconButton color="inherit" onClick={handleCopyToClipboard}>
                    <ContentCopyIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FlagSection;
