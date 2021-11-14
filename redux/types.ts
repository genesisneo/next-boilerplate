import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export interface RootState {
  global: any;
  user: any;
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
