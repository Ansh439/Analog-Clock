import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
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
        }

    }
})

export const {signinStart, signinSuccess, signinFailure} = userSlice.actions;
export default userSlice.reducer;