import { LOADING } from "./types";

const initialState = {
  loading: false,
};

export default function reducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    default:
      return state;
  }
}
