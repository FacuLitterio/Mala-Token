import { Box } from "@mui/material";
import IntroMusic from "common/assets/IntroMusic.mp3";
import { Player } from "react-simple-player";

const CustomAudioPlayer = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: 40,
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 99999,
      }}
    >
      <Player autoPlay={true} src={IntroMusic} height={40} hideVolume />
    </Box>
  );
};

export default CustomAudioPlayer;
