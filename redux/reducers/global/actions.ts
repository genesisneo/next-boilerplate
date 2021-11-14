import { LOADING } from "./types";

export const isLoading = (value: boolean) => ({
  type: LOADING,
  payload: {
    loading: value,
  },
});
