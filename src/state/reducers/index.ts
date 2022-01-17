import { combineReducers } from "redux";
import taskReducer from "./taskReducer"
import userReducer from "./userReducer";


const reducers = combineReducers({
    task: taskReducer,
    users: userReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>