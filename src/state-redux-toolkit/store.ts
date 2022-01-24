import {configureStore} from '@reduxjs/toolkit'
import { createSelectorHook } from 'react-redux'
import taskReducer from './features/taskSlice'
import userReducer from './features/userSlice'
import thunk from "redux-thunk"
import resourceReducer from './features/resourceSlice'
import { ReducerApi } from './features/apiSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        api: ReducerApi,
    },
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useSelectorTyped = createSelectorHook<RootState>();