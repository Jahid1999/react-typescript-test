import { Dispatch } from "redux"
import {taskInterface} from "../actions"

export const addTask = (task: taskInterface) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: "addTask",
            payload: task
        })
    }
}

export const deleteTask = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: "deleteTask",
            payload: id
        })
    }
}
