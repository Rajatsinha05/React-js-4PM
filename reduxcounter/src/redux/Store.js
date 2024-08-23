import { combineReducers, legacy_createStore } from "redux";
import { reducer } from "./Reducer";
import { UserReucer } from "./User/Reducer";
import { BlogReducer } from "./Blog/BlogReducer";

const combineAllReducers = combineReducers({
    counter: reducer,
    user: UserReucer,
    blogs:BlogReducer
})

export const Store = legacy_createStore(combineAllReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())