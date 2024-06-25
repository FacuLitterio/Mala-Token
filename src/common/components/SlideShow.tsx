import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { IconButton, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Slide = ({ isActive, slide }: { isActive: boolean; slide: CardInfo }) => {
  if (isActive) {
    return (
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <DonationCard {...slide} />
      </motion.div>
    );
  }
  return null;
};

type CardInfo = {
  id: number;
  avatar: string;
  title: string;
  subtitle: string;
  description: string;
  type: string;
  date: string;
  frequency: string;
  target: string;
  amount: string;
};

type SlideShowProps = {
  autoplay: boolean;
  delay?: number;
  data: CardInfo[];
};

const SlideShow = ({ autoplay, delay, data }: SlideShowProps) => {
  const [active, setActive] = useState(1);

  const prev = () =>
    setActive((prevActive) =>
      prevActive > 1 ? prevActive - 1 : data[data.length - 1].id
    );
  const next = useCallback(
    () => setActive(active < data.length ? active + 1 : 1),
    [active, data.length]
  );

  useEffect(() => {
    if (autoplay) {
      setTimeout(() => {
        next();
      }, delay || 3000);
    }
  }, [active, autoplay, delay, next]);

  return (
    <div>
      <AnimatePresence>
        {data.map((data) => {
          return <Slide isActive={active === data.id} slide={data} />;
        })}
      </AnimatePresence>
      <Stack direction="row" justifyContent="center" sx={{ mt: 1 }}>
        <IconButton onClick={prev} color="inherit">
          <ArrowBackOutlinedIcon />
        </IconButton>
        <IconButton onClick={next} color="inherit">
          <ArrowForwardOutlinedIcon />
        </IconButton>
      </Stack>
    </div>
  );
};

export default SlideShow;
