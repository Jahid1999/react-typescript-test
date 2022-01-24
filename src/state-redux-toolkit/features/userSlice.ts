import { createAsyncThunk, createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

const api = axios.create({baseURL:'https://reqres.in/api'})

interface InitiInterface {
    users : IUser []
    selectedUsers: IUser[]
    status: string
}
const initialState : InitiInterface = { users:[], selectedUsers:[], status: 'idle'};

// export const fetchUsers = async () => {
//     const response = await  api.get<IUserResponse>('/users?page=2')
//     return response.data.data
// }

export const fetchUsers = createAsyncThunk('users/fetchUserss', async () => {
    const response = await  api.get<IUserResponse>('/users?page=2')
    return response.data.data
})

// export const fetchUsers = () => {
//     return function(dispatch) {
//         api.get('/users?page=2').then(res => {
//             dispatch(fetchUsers(res.data.data))
//         })
//     }
// }

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

// export const userSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
// //    fetchUsers: (state, action : PayloadAction<IUser[]>) => {
// //     state.users = action.payload
// //    },
// //    makeIsAPICallingTrue :(state) => {
// //        state.isAPICalling = true
// //    },
// //    makeIsAPICallingFalse :(state) => {
// //     state.isAPICalling = false
// //     }       
//   },
//   extraReducers(builder) {
    // builder.addCase(fetchUsers.pending, (state, action) => {
    //     state.status = "pending"
    // })
    // builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
    //     state.status = "fulfilled"
    //     state.users = action.payload
    // })
    // builder.addCase(fetchUsers.rejected, (state, action) => {
    //     state.status = "error"
    // })
//   }
// });

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
        state.status = "pending"
    })
    builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
        state.status = "fulfilled"
        state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
        state.status = "error"
    })
})

// export const actioUsers = userSlice.actions;


// export default userSlice.reducer;

export default userReducer;