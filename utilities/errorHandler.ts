import { isLoading } from "../redux/reducers/global/actions";

export const errorHandler = (dispatch: any, error: any) => {
  dispatch(isLoading(false));
  const errorMessage = error.response ? error.response.data.error : "Something went wrong, please try again later.";
  console.warn({ errorMessage, error });
};
