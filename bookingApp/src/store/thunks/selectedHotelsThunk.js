import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchSelectedHotels = createAsyncThunk("hotels/fetchSelectedHotels", async (city, { rejectWithValue }) => {
    try {
        const selectedHotels = await axios.post(`${API_URL}/hotels`, { city });

        return selectedHotels.data;
    } catch (e) {
        return rejectWithValue(e.response?.data?.message || e.message);
    }
})