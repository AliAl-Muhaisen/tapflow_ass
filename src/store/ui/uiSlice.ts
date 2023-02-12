import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export type UiType = {
  loading: boolean;
  msg: string;
  error: boolean;
};

const initialState: UiType = {
  loading: false,
  error: false,
  msg: "",
};
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    changeStatus(state, action: PayloadAction<UiType>) {
      state.error = action.payload.error;
      state.loading = action.payload.loading;
      state.msg = action.payload.msg;
    },
  },
});
export const { toggle,changeStatus } = uiSlice.actions;
export const loading = (state: RootState) => state.uiSlice.loading;
export default uiSlice.reducer;
