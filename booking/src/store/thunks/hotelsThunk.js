import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchHotels = createAsyncThunk("hotels/fetchHotels", async ({ page = 1, limit = 6 }, { rejectWithValue }) => {
    try {
        const hotels = await axios.get(`${API_URL}/hotels`, {params: { page, limit }});

        return ({
            hotels: hotels.data.hotels,
            total: hotels.data.total,
            currentPage: page,
        });
    } catch (e) {
        return rejectWithValue(e.response?.data?.message || e.message);
    }
});