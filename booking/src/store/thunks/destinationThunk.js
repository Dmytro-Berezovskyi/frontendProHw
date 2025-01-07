import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchDestination = createAsyncThunk("destination/fetchDestination", async (_, { rejectWithValue }) => {
    try {
        const destination = await axios.get(`${API_URL}/destination`);

        return destination.data;
    } catch (e) {
       return rejectWithValue(e.response?.data?.message || e.message);
    }
});