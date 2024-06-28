import { Avatar, Button, Grid, Stack, Typography } from "@mui/material";
import MagaLogoImage from "common/assets/MagaLogo.png";
import RedesSociales from "common/components/RedesSociales";
import Section from "common/components/Section";

const PrivacyPolicySection = () => {
  return (
    <Section>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={10} md={8} lg={5}>
          <Stack spacing={2} alignItems="center">
            <Avatar src={MagaLogoImage} sx={{ height: 100, width: 100 }} />
            <Button
              variant="outlined"
              size="large"
              sx={{ color: "white", borderColor: "white" }}
            >
              Privacy Policy
            </Button>
            <Typography variant="body1" color="inherit" textAlign="center">
              contact@malamemecoin.com
            </Typography>
            <Typography variant="body2" color="inherit" textAlign="center">
              Please note that "Make Argentina Libertarian Again" Token is an
              entertainment cryptocurrency and is not associated with or
              endorsed by Javier Milei. Although the token may include
              references to Milei’s persona, image, or ideas,{" "}
              <b>
                <u>
                  it does not suggest any official endorsement, partnership, or
                  approval from Milei
                </u>
              </b>
              . Any resemblance to Javier Milei is purely coincidental and meant
              for humorous or satirical purposes only.
            </Typography>
            <Typography variant="caption" color="inherit" textAlign="center">
              Investing in cryptocurrencies involves significant risk and can
              result in the loss of your invested capital. Cryptocurrencies are
              highly volatile and subject to market fluctuations. Before
              investing, please conduct thorough research and consider seeking
              advice from a financial professional. Your investment in $MALA
              should be based on your risk tolerance and financial situation.
            </Typography>
            <RedesSociales />
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
};

export default PrivacyPolicySection;
