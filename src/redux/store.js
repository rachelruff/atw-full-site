import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import userReducer from "./user";

const store = createStore(userReducer, applyMiddleware(promiseMiddleware()));

export default store;
