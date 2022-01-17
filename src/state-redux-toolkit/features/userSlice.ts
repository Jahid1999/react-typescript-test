import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

const api = axios.create({baseURL:'https://reqres.in/api'})

interface InitiInterface {
    users : IUser []
}
const initialState : InitiInterface = { users:[]};

export const fetchUsers = async () => {
    const response = await  api.get<IUserResponse>('/users?page=2')
    return response.data.data
}

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

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
   fetchUsers: (state, action : PayloadAction<IUser[]>) => {
    state.users = action.payload
   },
  },
//   extraReducers(builder) {
//     builder.addCase(fetchUsers.fulfilled, (state, action) => {
//         state = action.payload
//       return action.payload
//     })
//   }
});

export const actioUsers = userSlice.actions;


export default userSlice.reducer;