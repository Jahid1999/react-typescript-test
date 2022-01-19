import { Dispatch } from "redux"
import {taskInterface} from "../actions"
import { ActionType } from '../types'

export const addTask = (task: taskInterface) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.ADD_TASK,
            payload: task
        })
    }
}

export const deleteTask = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.DELETE_TASK,
            payload: id
        })
    }
}

export const searchTask = (searchKey: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.SEARCH,
            payload: searchKey
        })
    }
}
