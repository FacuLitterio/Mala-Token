import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Grid, Hidden, Paper, Stack } from "@mui/material";
import PatternSVG from "common/assets/Main/Pattern.svg";
import DevicePaymentImage from "common/assets/Main/PaymentDevice2.jpg";
import AnimateWhileView from "common/components/AnimateWhileView";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import ImageContainer from "common/components/ImageContainer";
import StarBackground from "common/components/StarsBackground";
import { MEDIOS_DE_PAGO_LOGOS } from "common/constants";
import RedesSociales from "./RedesSociales";

const APPBAR_OFFSET = "60px";

const MainSection = () => {
  const FormasDePago = () => {
    return (
      <Stack direction="row" sx={{ mt: 2 }}>
        {MEDIOS_DE_PAGO_LOGOS.slice(0, 3).map((mp) => (
          <Paper elevation={0}>
            <img src={mp} height={20} width={100} />
          </Paper>
        ))}
      </Stack>
    );
  };

  return (
    <StarBackground>
      <Box
        component="section"
        sx={{
          mt: APPBAR_OFFSET,
          background: `url(${PatternSVG}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <Grid
          container
          sx={{
            px: { xs: 4, sm: 12, xl: 25 },
            py: { xs: 5, md: 8, lg: 15 },
          }}
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
          <Grid item xs={12} md={6} xl={4}>
            <Stack spacing={2}>
              <AnimateWhileView>
                <RedesSociales />
              </AnimateWhileView>
              <AnimatedTitle
                id="Inicio"
                sx={{
                  xs: { fontSize: ".6rem" },
                  md: { fontSize: "2rem" },
                  lg: { fontSize: "3rem" },
                }}
                variant="h3"
                text="¡Potencia las Ventas de tu Negocio con PandaPay!"
                primaryWord="Pay!"
              />
              <AnimatedSubtitle
                variant="subtitle1"
                color="text.secondary"
                sx={{ fontSize: ".9rem" }}
                text="Ofrecemos soluciones de cobro personalizadas para impulsar el
              crecimiento de tu negocio. Desde dispositivos de venta variados
              hasta opciones de acreditación flexibles, descubre cómo podemos
              llevar tus ventas a otro nivel."
              />
              <AnimateWhileView>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    maxWidth: 200,
                    color: "background.paper",
                    textTransform: "none",
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Empezá a Cobrar
                </Button>
              </AnimateWhileView>
              <AnimateWhileView>
                <FormasDePago />
              </AnimateWhileView>
            </Stack>
          </Grid>
          <Hidden mdDown>
            <Grid item md={6} xl={4}>
              <ImageContainer src={DevicePaymentImage} />
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </StarBackground>
  );
};

export default MainSection;
