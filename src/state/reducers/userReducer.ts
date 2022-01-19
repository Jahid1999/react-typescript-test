
import {Action} from "../actions/user-action";
import { ActionType } from '../types'

const initialState : Array<any> = [];


const userReducer = (state: Array<any> = initialState, action: Action): Array<any> => {

    switch(action.type) {
        case ActionType.FETCH_USERS: {
            state = action.payload
            return state;   
        }
        
        default : return state;
        
    }
    
}

export default userReducer;