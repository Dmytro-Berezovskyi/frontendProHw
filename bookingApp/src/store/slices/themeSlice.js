import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    themeMode: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleThemeMode: (state) => {
            state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
        }
    }
})

export const { toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;