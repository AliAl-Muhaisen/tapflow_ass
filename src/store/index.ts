import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./country/countrySlice";
import geoUserSlice from "./geoUser/geoUserSlice";
const store = configureStore({ reducer: { countrySlice, geoUserSlice } });

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
