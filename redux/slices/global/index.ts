import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IGlobal } from "./types";

const initialState: IGlobal = {
  loading: false,
};

export const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = global.actions;
export default global.reducer;
