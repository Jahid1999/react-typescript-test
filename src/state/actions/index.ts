
export interface taskInterface  {
    text: string,
    date: string,
    reminder: boolean,
  }
interface AddTaskAction {
    type: "addTask",
    payload: taskInterface
}

interface DeleteTaskAction {
    type: "deleteTask",
    payload: number
}

interface SearchTaskAction {
    type: "searchTask",
    payload: string
}

// export default AddTaskAction;

export type Action = AddTaskAction | DeleteTaskAction | SearchTaskAction;