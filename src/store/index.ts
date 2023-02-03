import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./country/countrySlice";

const store = configureStore({ reducer: { countrySlice } });

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
