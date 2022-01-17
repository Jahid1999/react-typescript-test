import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './features/taskSlice'
import userReducer from './features/userSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        users: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch