import {Action} from "../actions";
import { ActionType } from '../types'

const initialState = {
    tasks: [
        {
            id:1,
            text:'Task 1',
            date: '03-01-2022',
            reminder: true,
        },
        {
            id:2,
            text:'Task 2',
            date: '03-01-2022',
            reminder: true,
        },
        {
            id:3,
            text:'Task 3',
            date: '03-01-2022',
            reminder: false,
        },
    ],
    searchKey : ""
};

interface IState {
    tasks :taskInterfaceWithID [],
    searchKey: string
}

interface taskInterfaceWithID {
    id: number,
    text: string,
    date: string,
    reminder: boolean,
}
const reducer = (state: IState = initialState, action: Action): IState => {

    switch(action.type) {
        case ActionType.ADD_TASK: {
            let id : number = Math.ceil(Math.random() * 1000) + 1;

            const newTask = {id, ...action.payload}
            state.tasks = [...state.tasks, newTask]
            return state;
        }
        case ActionType.DELETE_TASK : {
            state.tasks = state.tasks.filter((s) => s.id !== action.payload)
            return state;
        }
        case ActionType.SEARCH : {
            return {...state, searchKey: action.payload}

        }
        default : return state;
        
    }

}

export default reducer

