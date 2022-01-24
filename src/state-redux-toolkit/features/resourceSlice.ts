import { createAsyncThunk, createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { createCustomReducer } from "../createThunkReducer";

const api = axios.create({baseURL:'https://reqres.in/api'})

interface InitiInterface {
    users : IUser []
    selectedUsers: IUser[]
    statusFetchUser: string
    statusFetchResource: string
    totalResource : number
}
const initialState : InitiInterface = { users:[], selectedUsers:[], statusFetchUser: 'idle', statusFetchResource: 'idle', totalResource: 0};


export const fetchResource = createAsyncThunk('users/fetchResource', async () => {
    const response = await  api.get<IUserResponse>('/unknown')
    console.log(response.data);
    
    return response.data.total
})

export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface IUserResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
}

export const resourceReducer = createCustomReducer(fetchResource)

// export const actioUsers = userSlice.actions;


// export default userSlice.reducer;

export default resourceReducer;