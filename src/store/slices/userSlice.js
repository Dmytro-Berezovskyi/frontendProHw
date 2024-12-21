import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false,
    name: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
        },
        logOut: (state, action) => {
            state.isLogin = false;
        },
    }
})

export const { login, logOut } = userSlice.actions;

export default userSlice.reducer;