import { Dispatch } from "react";
import { isLoading } from "../global/actions";
import { AppThunk } from "../../types";
import { api } from "../../../utilities/api";
import { endpoints } from "../../../utilities/endpoints";
import { errorHandler } from "../../../utilities/errorHandler";
import { USER_LIST } from "./types";

export function getUserList(): AppThunk {
  return async (dispatch: Dispatch<any>) => {
    dispatch(isLoading(true));
    try {
      const response = await api.get(endpoints.users);
      const { data } = response.data;
      dispatch({
        type: USER_LIST,
        payload: {
          list: data,
        },
      });
      dispatch(isLoading(false));
    } catch (error) {
      errorHandler(dispatch, error);
    }
  };
}
