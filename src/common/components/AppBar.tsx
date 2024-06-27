import AltRouteIcon from "@mui/icons-material/AltRoute";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ExtensionIcon from "@mui/icons-material/Extension";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import {
  Avatar,
  Box,
  Button,
  Hidden,
  IconButton,
  AppBar as MuiAppBar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MagaLogo from "common/assets/MagaLogo.png";
import onScrollToSection from "common/helpers/onScrollToSection";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const PAGES = [
  { id: 1, label: "Home", icon: <HomeIcon /> },
  { id: 2, label: "Mission", icon: <AutoAwesomeIcon /> },
  { id: 3, label: "Donations", icon: <VolunteerActivismIcon /> },
  { id: 4, label: "Tokenomics", icon: <ExtensionIcon /> },
  { id: 5, label: "Roadmap", icon: <AltRouteIcon /> },
];

const AnimatedBox = motion(Box);

const AppBar: React.FC<{ onChangeMenu: () => void }> = ({ onChangeMenu }) => {
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
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                onClick={() => onScrollToSection("Inicio")}
              >
                <Avatar
                  src={MagaLogo}
                  onClick={() => onScrollToSection("Inicio")}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  component="span"
                  color="white"
                  sx={{ cursor: "pointer" }}
                  onClick={() => onScrollToSection("Inicio")}
                >
                  $MALA
                </Typography>
              </Stack>
              <Hidden smDown>
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
                          onScrollToSection(page.label);
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
                          backgroundColor: (theme) =>
                            theme.palette.primary.main,
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
              </Hidden>
              <IconButton
                sx={{ color: "white" }}
                onClick={() => onChangeMenu()}
              >
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
