import { useAppSelector } from "../../hooks/redux";
import { GeoUserType } from "../../store/geoUser/geoUserSlice";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React, { Suspense } from "react";
import Loading from "../ui/loading/loading";
const CardUser = React.lazy(() => import("./cardUser"));
const GeoUserCard = () => {
  const geoUsers: GeoUserType[] | [] = useAppSelector(
    (state) => state.geoUserSlice.geoUsers
  );
  if (geoUsers.length === 0) {
    return (
      <Typography variant="subtitle1" textAlign={"center"} fontWeight={"bold"}>
        You did not add user yet
      </Typography>
    );
  }
  const uiElement = geoUsers.map((user, index) => {
    return (
      <Suspense fallback={<Loading />}     key={index.toString()}>
        <CardUser
          cities={user.location.cities}
          name={user.name}
          country={user.location.country}
          image={user.image}
          link={user.link}
      
        />{" "}
      </Suspense>
    );
  });
  return (
    <Grid container justifyContent={"center"} my={5} px={1}>
      <Grid item xs={12} md={6}>
        <Grid container rowSpacing={1}>
          {uiElement}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GeoUserCard;
