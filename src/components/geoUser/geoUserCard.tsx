import { useAppSelector } from "../../hooks/redux";
import { GeoUserType } from "../../store/geoUser/geoUserSlice";
import Avatar from "@mui/material/Avatar";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

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
      <CardUser
        cities={user.location.cities}
        name={user.name}
        country={user.location.country}
        image={user.image}
        link={user.link}
        key={`${user.link}${user.name}${user.location.country}`}
      />
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

interface CardProps {
  image: any;
  name: string;
  country: string;
  cities: string[];
  link: string;
}
const CardUser = (props: CardProps) => {
  return (
    <>
      <Grid item xs={12} sm={12} px={0.5} my={0.5}>
        <Paper elevation={4} color={"primary"}>
          <Grid
            container
            direction="row"
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
              src={props.image}
              sx={{
                width: 100,
                height: 100,
                border: "1px solid",
                borderColor: "#a39b8b",
              }}
            />
            <Grid marginLeft={4}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: 38,
                }}
              >
                {props.name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: 27,
                }}
              >
                {props.country}
              </Typography>
            </Grid>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              {props.cities.map((city) => (
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                  key={city}
                >
                  {city}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};
