import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material//Divider";
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import MenuIcon from "@mui/icons-material/Menu";
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
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(2),
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
}));

export default function SearchAppBar(props: {
  open: boolean;
  showMenuIcon:boolean;
  handleDrawerOpenClose: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <AppBar
      position="fixed"
      sx={{
        justifyContent: "space-between",
        backgroundColor: "white",
        color: "black",
        // height:150,
        // maxHeight:150
        // py: { xs: 1.2, md: 1.5 },
        px:1
      }}
    >
      <Toolbar>
        {props.showMenuIcon && <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpenClose}
          edge="start"
          sx={{
            marginRight: 5,
            ...(props.open && { display: "block" }),
          }}
        >
          <MenuIcon />
        </IconButton>}
        <Box
          component="img"
          sx={{
            // height: 233,
            // width: 350,
            py:{xs:1,md:2},
            maxHeight: { xs: 50, md: 117 },
            maxWidth: { xs: 110, md: 140 },
          }}
          alt="website logo"
          src="image/logo.svg"
        />
        {/* <Typography variant="h6" sx={{ my: 2 }}>
            TapFlow
          </Typography> */}
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
  );
}
