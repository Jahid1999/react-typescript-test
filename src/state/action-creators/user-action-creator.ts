import { Dispatch } from "redux"
import axios from 'axios';

const api = axios.create({baseURL:'https://reqres.in/api'})

export const fetchUsers = () => {
    return (dispatch: Dispatch) => {
        api.get('/users?page=2').then((res)=> {
            dispatch({
                type: "fetchUsers",
                payload : res.data.data
            })
          })
    
    }
}

