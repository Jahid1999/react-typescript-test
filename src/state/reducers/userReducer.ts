
import {Action} from "../actions/user-action";

const initialState : Array<any> = [];


const userReducer = (state: Array<any> = initialState, action: Action): Array<any> => {

    switch(action.type) {
        case "fetchUsers": {
            state = action.payload
            return state;   
        }
        
        default : return state;
        
    }
    
}

export default userReducer;