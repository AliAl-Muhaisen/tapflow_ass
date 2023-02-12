import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchAppBar from "./appBar";
import GeoUserPage from "../../../pages/geoUserPage";
import ProfilePage from "../../../pages/profilePage";
import TapasIcon from "@mui/icons-material/Tapas";
import { Route, Link, Routes } from "react-router-dom";

import useWindowSize from "../../../hooks/windowSize";
import { useCallback } from "react";
const drawerWidth = 250;

export default function SideBar() {
  const { width } = useWindowSize();

  const [open, setOpen] = React.useState(true);
  const [selectedLink, setSelectedLink] = React.useState<number>(0);

  const checkWidth = useCallback((): boolean => {
    if (width < 600) return true;
    else return false;
  }, [width]);
  const handleDrawerOpenClose = () => {
    if (open && checkWidth()) setOpen(false);
    else setOpen(true);
  };

  React.useEffect(() => {
    if (checkWidth()) setOpen(false);
    else setOpen(true);
    console.log(width);
  }, [checkWidth, width]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SearchAppBar open={open} handleDrawerOpenClose={handleDrawerOpenClose} showMenuIcon={checkWidth()}/>

      <Drawer
        variant="permanent"
        open={open}
        sx={{ opacity: open ? 1 : 0, display: open ? "block" : "none" }}
      >
        <List sx={{ opacity: open ? 1 : 0, my: 7, p: 4 }}>
          {[
            { name: "GeoUser", path: "/" },
            { name: "Profile", path: "/profile" },

            { name: "I don't have a time", path: "/profile" },
            { name: "Settings", path: "/" },
          ].map((route, index) => (
            <Link
              to={route.path}
              key={index}
              color="red"
              
              style={{
                textDecoration: "none",
                color: selectedLink === index ? "orange" : "gray",
                backgroundColor:"red",
              }}
              onClick={() => {
                setSelectedLink(index);
                handleDrawerOpenClose();
              }}
            >
              <ListItem
                key={route.name}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <TapasIcon
                      color={selectedLink === index ? "warning" : "disabled"}
                    />
                  </ListItemIcon>

                  <ListItemText primary={route.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          my: {md:3.5,xs:9},
          flexGrow: 1,
          p: {
            xs: 1,
            md: 8,
          },
        }}
      >
        <Routes>
          <Route path="/" element={<GeoUserPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Box>
    </Box>
  );
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));
