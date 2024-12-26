import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    themeMode: 'light',
};

const themeSlice = {
    name: 'theme',
    state: initialState,
    reducers: {
        toggleThemeMode: (state) => {
            state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
        }
    }
}

export const { toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;