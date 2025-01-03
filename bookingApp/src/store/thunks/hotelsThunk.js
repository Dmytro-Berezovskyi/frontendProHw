import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchHotels = createAsyncThunk("hotels/fetchHotels", async (_, { rejectWithValue }) => {
    try {
        const hotels = await axios.get(`${API_URL}/hotels`);

        return hotels.data;
    } catch (e) {
        return rejectWithValue(e.response?.data?.message || e.message);
    }
});