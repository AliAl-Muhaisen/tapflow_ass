import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui/uiSlice";
import countrySlice from "./country/countrySlice";
import geoUserSlice from "./geoUser/geoUserSlice";

const store = configureStore({
  reducer: { uiSlice,countrySlice, geoUserSlice,  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
