import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import type { RootState } from "../index";
import axios, { AxiosResponse } from "axios";

type Countries = {
  countries: Country[];
  error: boolean | string;
  msg: string;
  isFetched: boolean;
};
interface Country {
  name: string;
  cities: string[];
}
const initialState: Countries = {
  countries: [],
  error: false,
  msg: "",
  isFetched: false,
};

export const fetchCountriesData = createAsyncThunk("countries", async () => {
  try {
    let response: AxiosResponse = await axios.get(
      "https://countriesnow.space/api/v0.1/countries"
    );
    let data = await response.data;
    return data;
  } catch (error) {}
});
export const countrySlice = createSlice({
  name: "countries",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCountriesData.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (state.countries.length > 0) {
          state.isFetched = true;
        }

        if ((action?.payload?.data?.length > 0 ?? false) && !state.isFetched) {
          action.payload.data.map((country: any): void => {
            let newCountry: Country = {
              cities: country.cities,
              name: country.country,
            };
            const countriesData: any = current(state.countries);
            let isAlreadyExists: boolean = false;
            for (const element of countriesData) {
              if (element.name === newCountry.name) {
                isAlreadyExists = true;
                break;
              }
            }

            if (!isAlreadyExists) state.countries.push(newCountry);
          });
          return;
        }
        state.error = action?.payload?.error ?? true;
        state.msg = action?.payload?.msg ?? "Something went wrong";
      }
    );
  },
});
export const selectCountries = (state: RootState) =>
  state.countrySlice.countries;
export const selectMsg = (state: RootState) => state.countrySlice.msg;
export default countrySlice.reducer;
