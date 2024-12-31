import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import destinationReducer from "./slices/destinationSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        destination: destinationReducer,
    }
})