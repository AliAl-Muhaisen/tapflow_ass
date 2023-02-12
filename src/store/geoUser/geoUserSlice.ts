import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
interface Country {
  country: string;
  cities: string[];
}
export type GeoUserType = {
  name: string;
  image: any;
  location: Country;
  link: string;
};
export interface GeoType {
  geoUsers: GeoUserType[];
}

const initialState: GeoType = {
  geoUsers: [],
};

export const geoUserSlice = createSlice({
  name: "geoUser",
  initialState,

  reducers: {
    add: (state, action: PayloadAction<GeoUserType>) => {
      state.geoUsers.push(action.payload);
    },
  },
});
export const { add } = geoUserSlice.actions;

// export const selectGeoUsers = (state: RootState) =>
//   state.geoUserSlice.geoUsers;
export default geoUserSlice.reducer;
