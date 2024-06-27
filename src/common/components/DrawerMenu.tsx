import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import onScrollToSection from "common/helpers/onScrollToSection";
import * as React from "react";
import { PAGES } from "./AppBar";
import RedesSociales from "./RedesSociales";

type Anchor = "right";

const DrawerMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose: onClose,
}) => {
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      onClose();
    };

  return (
    <div>
      <Drawer anchor="right" open={isOpen} onClose={() => onClose()}>
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer("right", false)}
          onKeyDown={toggleDrawer("right", false)}
        >
          <List>
            {PAGES.map((page) => (
              <ListItem key={page.id} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={page.label}
                    onClick={() => onScrollToSection(page.label)}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ bgcolor: "white" }} />
          <Stack spacing={2} p={2}>
            <RedesSociales />
          </Stack>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
