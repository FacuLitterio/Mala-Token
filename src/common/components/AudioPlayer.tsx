import { Box } from "@mui/material";
import IntroMusic from "common/assets/Metamorphosis.mp3";
import { useEffect, useState } from "react";
import { Player } from "react-simple-player";

const CustomAudioPlayer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      {isMounted && (
        <Player
          key="AudioPlayer"
          autoPlay={true}
          src={IntroMusic}
          height={40}
          hideVolume
        />
      )}
    </Box>
  );
};

export default CustomAudioPlayer;
