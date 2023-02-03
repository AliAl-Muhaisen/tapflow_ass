import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchCountriesData } from "../../store/country/countrySlice";
import { useEffect } from "react";
const GeoUser = (props: any) => {
  const countries = useAppSelector((state) => state.countrySlice.countries);
  const isFetched: boolean = useAppSelector(
    (state) => state.countrySlice.isFetched
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchCountriesData());
      // setIsFetched(true);
    }
  }, []);
  const dataElement = countries.map((country, index) => {
    // console.log(index);
    return <p key={index}>{country.name}</p>;
  });

  return (
    <Box>
      <Grid container justifyContent={"center"} my={5} px={1}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} color={"primary"}>
            <form noValidate>
              {" "}
              <h1>countries</h1>
              <h1>{isFetched.toString()}</h1>
              {dataElement}
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeoUser;
