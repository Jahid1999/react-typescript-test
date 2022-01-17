import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const api = axios.create({baseURL:'https://reqres.in/api'})

const initialState : Array<any> = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await  api.get('/users?page=2')
    return response.data.data
  })

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
//    fetchUsers: (state) => {
//     api.get('/users?page=2').then((res)=> {
//        state = res.data.data
//        console.log(state);
       
//       })
//    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state = action.payload
      return action.payload
    })
  }
});

// export const { fetchUsers } = userSlice.actions;

export default userSlice.reducer;