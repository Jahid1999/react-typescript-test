import {Action} from "../actions";

const initialState = [
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
];

interface taskInterfaceWithID {
    id: number,
    text: string,
    date: string,
    reminder: boolean,
}
const reducer = (state: taskInterfaceWithID[] = initialState, action: Action): taskInterfaceWithID[] => {

    switch(action.type) {
        case "addTask": {
            let id : number = Math.ceil(Math.random() * 1000) + 1;

            const newTask = {id, ...action.payload}
            state = [...state, newTask]
            return state;
        }
        case "deleteTask" : {
            state = state.filter((s) => s.id !== action.payload)
            return state
        }
        
    }
    

    return state
}

export default reducer

