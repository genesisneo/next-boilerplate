import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import global from "./reducers/global/reducers";
import user from "./reducers/user/reducers";

const bindMiddleware = (middleware: any) =>
  process.env.NODE_ENV !== "production" ? composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(...middleware);

const combinedReducer = combineReducers({
  global,
  user,
});

const storeReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return combinedReducer(state, action);
};

const initStore = () => createStore(storeReducer, bindMiddleware([reduxThunk]));

export const wrapper = createWrapper(initStore);

export default wrapper;
