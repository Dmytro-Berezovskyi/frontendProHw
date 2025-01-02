import { createSlice } from '@reduxjs/toolkit';

import { selectedHotels } from "../thunks/selectedHotelsThunk";


const initialState = {
    selectedHotels: [],
    loading: false,
    error: '',
};

const selectedHotelsSlice = createSlice({
    name: 'selectedHotels',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(selectedHotels.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(selectedHotels.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.selectedHotels = action.payload;
                console.log("Payload received:", action.payload);
            })
            .addCase(selectedHotels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default selectedHotelsSlice.reducer;