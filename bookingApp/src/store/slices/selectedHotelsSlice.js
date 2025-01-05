import { createSlice } from "@reduxjs/toolkit";

import { fetchSelectedHotels } from "../thunks/selectedHotelsThunk";

const initialState = {
    selectedHotels: [],
    loading: false,
    error: "",
};

const selectedHotelsSlice = createSlice({
    name: "selectedHotels",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSelectedHotels.pending, (state, action) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchSelectedHotels.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.selectedHotels = action.payload;
            })
            .addCase(fetchSelectedHotels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default selectedHotelsSlice.reducer;