import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  AppBar as MuiAppBar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MagaLogo from "common/assets/MagaLogo.png";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PAGES = [
  { id: 1, label: "Home" },
  { id: 2, label: "Mission" },
  { id: 3, label: "Donations" },
  { id: 4, label: "Tokenomics" },
  { id: 5, label: "Roadmap" },
];

const AnimatedBox = motion(Box);

const AppBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [_hookedYPostion, setHookedYPosition] = useState(0);
  useEffect(() => {
    scaleX.onChange((v) => setHookedYPosition(v));
  }, [scaleX, scrollYProgress]);

  useEffect(() => {
    PAGES.forEach((page, index) => {
      sectionsRef.current[index] = document.getElementById(page.label);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const yOffset = -75;
    const element = document.getElementById(sectionId);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const variants = {
    active: {
      scaleX: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 0.5,
        restSpeed: 0.5,
      },
    },
    inactive: {
      scaleX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 0.5,
        restSpeed: 0.5,
      },
    },
  };

  return (
    <>
      <MuiAppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: 64,
              mt: 1,
              bgcolor: "#212121",
              borderRadius: 20,
              p: 2,
            }}
          >
            <Stack
              sx={{ height: 1 }}
              direction="row"
              alignItems="center"
              spacing={5}
            >
              <Stack direction="row" spacing={0.5}>
                <Avatar src={MagaLogo} />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  component="span"
                  color="white"
                  onClick={() => handleScrollToSection("Inicio")}
                  sx={{ cursor: "pointer" }}
                >
                  $MALA
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                {PAGES.map((page) => (
                  <Box key={page.id} sx={{ position: "relative" }}>
                    <Button
                      sx={{
                        textTransform: "none",
                        fontWeight: "bolder",
                        color:
                          activeSection === page.label
                            ? "primary.main"
                            : "white",
                      }}
                      onClick={() => {
                        handleScrollToSection(page.label);
                      }}
                    >
                      {page.label}
                    </Button>
                    <AnimatedBox
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        backgroundColor: (theme) => theme.palette.primary.main,
                        transformOrigin: "center",
                      }}
                      variants={variants}
                      animate={
                        activeSection === page.label ? "active" : "inactive"
                      }
                      initial={false}
                    />
                  </Box>
                ))}
              </Stack>
              <IconButton sx={{ color: "white" }} onClick={() => {}}>
                <MenuIcon />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </MuiAppBar>
    </>
  );
};

export default AppBar;
