import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material//Divider";
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { drawerWidth } from "./sideBar";
import MenuIcon from '@mui/icons-material/Menu';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function SearchAppBar(porps:{open:boolean,handleDrawerOpen:any}) {
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          justifyContent: "space-between",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={porps.handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(porps.open && { display: 'none' }),
            }}
          >
            <MenuIcon />
            </IconButton>
          <Typography variant="h6" sx={{ my: 2 }}>
            TapFlow
          </Typography>
          <Divider />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Search sx={{ borderRadius: 10, maxWidth: 200 }}>
            <StyledInputBase
              endAdornment={
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
              }
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
