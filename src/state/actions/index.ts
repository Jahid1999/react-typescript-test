import { ActionType } from '../types'

export interface taskInterface  {
    text: string,
    date: string,
    reminder: boolean,
  }
interface AddTaskAction {
    type: ActionType.ADD_TASK,
    payload: taskInterface
}

interface DeleteTaskAction {
    type: ActionType.DELETE_TASK,
    payload: number
}

interface SearchTaskAction {
    type: ActionType.SEARCH,
    payload: string
}

// export default AddTaskAction;

export type Action = AddTaskAction | DeleteTaskAction | SearchTaskAction;