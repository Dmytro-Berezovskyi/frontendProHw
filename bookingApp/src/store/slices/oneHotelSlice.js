import { createSlice } from "@reduxjs/toolkit";
import { fetchOneHotel } from "../thunks/oneHotelThunk";

const initialState = {
    hotel: [],
};

const oneHotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOneHotel.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchOneHotel.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.hotel = action.payload;
            })
            .addCase(fetchOneHotel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Unknown error";
            })
    }
})

export default oneHotelSlice.reducer;