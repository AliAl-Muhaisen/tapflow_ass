import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchCountriesData } from "../../store/country/countrySlice";
import { useEffect, useState } from "react";
import { FormInput, CountryInput } from "../formik/inputs";
import ImageInput from "../formik/imageInput";
import { useFormik } from "formik";
import { geoUserValidation } from "../../lib/validation";
import { add, GeoUserType } from "../../store/geoUser/geoUserSlice";
interface InputForm {
  name: string | "";
  country: string | null;
  cities: string[] | null;
  image: any | undefined;
  link: string | "";
}

const GeoUser = (props: any) => {
  const countries = useAppSelector((state) => state.countrySlice.countries);
  const [cities, setCities] = useState<string[]>([]);

  const isFetched: boolean = useAppSelector(
    (state) => state.countrySlice.isFetched
  );
  const dispatch = useAppDispatch();

  const onSubmit = async (values: InputForm, actions: any) => {
    const geoUser: GeoUserType = {
      image: values.image,
      link: values.link,
      name: values.name,
      location: { country: values.country!, cities: values.cities! },
    };
    dispatch(add(geoUser));
    console.log(actions);
    actions.resetForm({
      values : {
        name: "",
        country: null,
        cities: null,
        image: undefined,
        link: "",
      }
    });
    actions.resetForm();
   
  };

  const { handleSubmit, getFieldMeta, getFieldProps, getFieldHelpers } =
    useFormik({
      initialValues: {
        name: "",
        country: null,
        cities: null,
        image: undefined,
        link: "",
      },

      validationSchema: geoUserValidation,
      onSubmit,
    });

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchCountriesData());
    }
  }, []);

  const changeCities = (countryName: string) => {
    countries.find((country) => {
      if (country.name === countryName) {
        setCities(country.cities);
        return country.cities;
      }
    });
  };

  return (
    <Box>
      <Grid container justifyContent={"center"} px={1}>
        <Grid item xs={12} md={6}>
          <form noValidate onSubmit={handleSubmit}>
            <Paper elevation={3} color={"primary"}>
              <Grid
                container
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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  px={0.5}
                  my={0.5}
                  justifyContent={"space-around"}
                  display={"flex"}
                >
                  <ImageInput
                    {...getFieldMeta("image")}
                    {...getFieldProps("image")}
                    {...getFieldHelpers("image")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <FormInput
                    error={getFieldMeta("name").error}
                    isTouched={getFieldMeta("name").touched}
                    key="name"
                    label="User Name"
                    name={getFieldProps("name").name}
                    onBlur={getFieldProps("name").onBlur}
                    onChange={getFieldProps("name").onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <FormInput
                    error={getFieldMeta("link").error}
                    isTouched={getFieldMeta("link").touched}
                    key="link"
                    label="Link"
                    name={getFieldProps("link").name}
                    onBlur={getFieldProps("link").onBlur}
                    onChange={getFieldProps("link").onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <CountryInput
                    key="country"
                    options={[
                      ...countries.map((country) => {
                        return country.name;
                      }),
                    ]}
                    {...getFieldMeta("country")}
                    {...getFieldProps("country")}
                    {...getFieldHelpers("country")}
                    label={"Choose a Country"}
                    changeCities={(value: string) => changeCities(value)}
                    multiple={false}
                  />
                </Grid>
                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <CountryInput
                    key="cities"
                    options={[...cities]}
                    {...getFieldMeta("cities")}
                    {...getFieldProps("cities")}
                    {...getFieldHelpers("cities")}
                    label={"Choose a Cities"}
                    // changeCities={(value){}}
                    multiple={true}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} my={2}>
                <Button fullWidth variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Paper>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeoUser;
