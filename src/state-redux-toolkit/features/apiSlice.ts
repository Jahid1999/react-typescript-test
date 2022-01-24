import { combineReducers } from "@reduxjs/toolkit";
import resourceReducer from "./resourceSlice";
import userReducer from "./userSlice";

const reducers = {
    user: userReducer,
    resources: resourceReducer
}

export const ReducerApi = combineReducers(reducers);

export type ReducerApiState = ReturnType<typeof ReducerApi>;