import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
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
    ],
    searchKey : ""
};


export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
   addTask: (state, action) => {
        let id : number = Math.ceil(Math.random() * 1000) + 1;

        const newTask = {id, ...action.payload}
        state.tasks = [...state.tasks, newTask]
   },
   search: (state, action) => {
        state.searchKey = action.payload;
   },
   deleteTask: (state, action) => {
    state.tasks = state.tasks.filter((s) => s.id !== action.payload)
   }
  },
});

export const { addTask, search, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;