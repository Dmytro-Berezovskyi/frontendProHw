import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const API_URL = process.env.REACT_APP_API_URL;

export const selectedHotels = createAsyncThunk('hotels/selectedHotels', async (city, { rejectWithValue }) => {
    try {
        console.log("City: " + city);
        const selectedHotels = await axios.post(`${API_URL}/hotels`, { city });
        console.log("Server response:", selectedHotels.data);

        return selectedHotels.data;
    } catch (e) {
        return rejectWithValue(e.response?.data?.message || e.message);
    }
})