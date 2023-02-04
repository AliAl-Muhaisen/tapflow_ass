import { useAppSelector } from "../../hooks/redux";
import { GeoUserType } from "../../store/geoUser/geoUserSlice";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const GeoUserCard = () => {
  const geoUsers: GeoUserType[] | [] = useAppSelector(
    (state) => state.geoUserSlice.geoUsers
  );
  if (geoUsers.length == 0) {
    return (
      <Typography variant="subtitle1">You did not add user yet</Typography>
    );
  }
  const uiElement = geoUsers.map((user) => {
    return (
      <Grid item  xs={12}
      sm={12}
      px={0.5}
      my={0.5}>
        <Paper elevation={4} color={"primary"}>
          <Grid
            container
            direction="row"
            // justifyContent="flex-start"
            alignItems="center"
            sx={{
              py: {
                sm: 4,
                xs: 3,
              },
              px: {
                sm: 4,
                xs: 1.8,
              },
            }}
            justifyContent={"space-between"}
          >
            <Avatar
              alt="profile image"
              src={user.image}
              sx={{
                width: 150,
                height: 150,
                border: "1px solid",
                borderColor: "#a39b8b",
              }}
            />
            <Grid marginLeft={8}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: 45,
                }}
              >
                {user.name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: 30,
                }}
              >
                {user.location.country}
              </Typography>
            </Grid>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              {user.location.cities.map((city) => {
                return (
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                  >
                    {city}
                  </Typography>
                );
              })}
            </Box>
          </Grid>
        </Paper>
      </Grid>
      //   <Card sx={{ display: 'flex' }}>
      //   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      //     <CardContent sx={{ flex: '1 0 auto' }}>
      //       <Typography component="div" variant="h5">
      //       {user.name}
      //       </Typography>
      //       <Typography variant="subtitle1" color="text.secondary" component="div">
      //       {user.location.country}
      //       </Typography>
      //     </CardContent>
      //     <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      //       {
      //         user.location.cities.map(city=>{
      //           return <Typography variant="subtitle2" color="text.secondary" component="div">
      //           {city}
      //           </Typography>
      //         })
      //       }
      //     </Box>
      //   </Box>
      //   <CardMedia
      //     component="img"
      //     sx={{ width: 151 }}
      //     image={user.image}
      //     alt="Live from space album cover"
      //   />
      // </Card>
    );
  });
  return (
    <Grid
      container
      justifyContent={"center"}
      my={5}
      px={1}
      // xs={12}
      // sm={10}
      // md={6}
      // p={2}
      // spacing={2}
    >
      <Grid item xs={12} md={6}>
        <Grid container rowSpacing={1} >
          {uiElement}
        </Grid>
        
      </Grid>
    </Grid>
  );
};

export default GeoUserCard;
