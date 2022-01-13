
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

// export default AddTaskAction;

export type Action = AddTaskAction | DeleteTaskAction;