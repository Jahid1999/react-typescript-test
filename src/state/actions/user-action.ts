import { ActionType } from '../types'
interface FetchUserAction {
    type: ActionType.FETCH_USERS,
    payload: Array <any>
}

// export default AddTaskAction;

export type Action = FetchUserAction;