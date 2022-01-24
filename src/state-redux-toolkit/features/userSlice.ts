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

// export const fetchUsers = async () => {
//     const response = await  api.get<IUserResponse>('/users?page=2')
//     return response.data.data
// }

export const fetchUsers = createAsyncThunk('users/fetchUserss', async () => {
    const response = await  api.get<IUserResponse>('/users?page=2')
    return response.data.data
})

export const fetchResource = createAsyncThunk('users/fetchResource', async () => {
    const response = await  api.get<IUserResponse>('/unknown')
    console.log(response.data);
    
    return response.data.total
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

// export const userReducer = createReducer(initialState, (builder) => {
//     builder.addCase(fetchUsers.pending, (state, action) => {
//         state.statusFetchUser = "pending"
//     })
//     builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
//         state.statusFetchUser = "fulfilled"
//         state.users = action.payload
//     })
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//         state.statusFetchUser = "error"
//     })

//     builder.addCase(fetchResource.pending, (state, action) => {
//         state.statusFetchResource = "pending"
//     })
//     builder.addCase(fetchResource.fulfilled, (state, action) => {
//         state.statusFetchResource = "fulfilled"
//         state.totalResource = action.payload
//     })
//     builder.addCase(fetchResource.rejected, (state, action) => {
//         state.statusFetchResource = "error"
//     })
// })

export const userReducer = createCustomReducer(fetchUsers)

// export const actioUsers = userSlice.actions;


// export default userSlice.reducer;

export default userReducer;