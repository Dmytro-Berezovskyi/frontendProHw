import { createSlice } from '@reduxjs/toolkit';
import { fetchHotels } from '../thunks/hotelsThunk';

const initialState = {
    hotels: [],
    loading: false,
    error: '',
};

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotels.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.hotels = action.payload;
            })
            .addCase(fetchHotels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const { fetchHotelsStarted, fetchHotelsSuccess, fetchHotelsError } = hotelsSlice.actions;

export default hotelsSlice.reducer;