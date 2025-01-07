import { createSlice } from "@reduxjs/toolkit";

import { fetchHotels } from "../thunks/hotelsThunk";

const initialState = {
    hotels: [],
    loading: false,
    error: "",
    total: 0,
    currentPage: 1,
};

const hotelsSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotels.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.hotels = action.payload.hotels;
                state.total = action.payload.total;
                state.currentPage = action.payload.currentPage || state.currentPage;
            })
            .addCase(fetchHotels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Unknown error";
            })
    }
})

export default hotelsSlice.reducer;