import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IUsers, IUser } from "./types";

const initialState: IUsers = {
  list: [],
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersList: (state, action: PayloadAction<IUser[]>) => {
      state.list = action.payload;
    },
  },
});

export const { setUsersList } = users.actions;
export default users.reducer;
