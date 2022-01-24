import { AsyncThunk, createReducer, PayloadAction } from "@reduxjs/toolkit"
import { ApiStorage } from "./ApiStorage"

export interface IResponse <T>{
    status?: "pending" | "fulfilled" | "error"
    uid: string
    response?: T
}

export function createCustomReducer<T, R> (thunk: AsyncThunk<T, void, {}>) {

    const userReducer = createReducer<IResponse<T>>({uid: Math.random() * 1000 + '-'}, (builder) => {
        builder.addCase(thunk.pending, (state, action) => {
            state.status = "pending"
        })
        builder.addCase(thunk.fulfilled, (state, action:PayloadAction<T>) => {
            state.status = "fulfilled"
            // state.response = action.payload as any
            ApiStorage.setResponse(
                state.uid,
                action.payload as any
              );
        })
        builder.addCase(thunk.rejected, (state, action) => {
            state.status = "error"
        })
    })

    return userReducer;
}