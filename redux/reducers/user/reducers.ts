import { USER_LIST } from "./types";

const initialState = {
  list: [],
};

export default function reducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case USER_LIST:
      return {
        ...state,
        list: payload.list,
      };
    default:
      return state;
  }
}
