import { Dispatch } from "redux"
import axios from 'axios';
import { ActionType } from '../types'

const api = axios.create({baseURL:'https://reqres.in/api'})

export const fetchUsers = () => {
    return (dispatch: Dispatch) => {
        api.get('/users?page=2').then((res)=> {
            dispatch({
                type: ActionType.FETCH_USERS,
                payload : res.data.data
            })
        })
    
    }
}

