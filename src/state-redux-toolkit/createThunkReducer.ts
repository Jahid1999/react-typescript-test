import { AsyncThunk, createReducer, PayloadAction } from "@reduxjs/toolkit"

interface IResponse <T>{
    status?: "pending" | "fulfilled" | "error"
    response?: T
}

export function createCustomReducer<T> (thunk: AsyncThunk<T, void, {}>) {

    const userReducer = createReducer<IResponse<T>>({}, (builder) => {
        builder.addCase(thunk.pending, (state, action) => {
            state.status = "pending"
        })
        builder.addCase(thunk.fulfilled, (state, action:PayloadAction<T>) => {
            state.status = "fulfilled"
            state.response = action.payload as any
        })
        builder.addCase(thunk.rejected, (state, action) => {
            state.status = "error"
        })
    })

    return userReducer;
}