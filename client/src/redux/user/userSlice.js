import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    speed: 1000,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signinStart: (state) => {
            state.loading = true,
            state.error = null
        },
        signinSuccess: (state, action) => {
            state.currentUser = action.payload,
            state.loading = false,
            state.error = null
        },
        signinFailure: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        signoutSuccess: (state) => {
            state.currentUser = null,
            state.error = null,
            state.loading = false   
        },
        changeSpeed: (state, action) => {
            state.speed = action.payload
        }
    }
})

export const {signinStart, signinSuccess, signinFailure, signoutSuccess, changeSpeed} = userSlice.actions;
export default userSlice.reducer;