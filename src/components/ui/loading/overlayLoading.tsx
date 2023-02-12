import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

import React from "react";

const OverlayLoading: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <CircularProgress size={60} />
    </Backdrop>
  );
};
export default OverlayLoading;
