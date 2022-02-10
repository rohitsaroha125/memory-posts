import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { authReducer } from "./auth"

export const rootReducer=combineReducers({
    posts: postReducer,
    auth: authReducer
})