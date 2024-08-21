import { legacy_createStore } from "redux";
import { reducer } from "./Reducer";
import { UserReucer } from "./User/Reducer";

export const Store = legacy_createStore(UserReucer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())