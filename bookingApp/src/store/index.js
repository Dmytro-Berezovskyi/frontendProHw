import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import destinationReducer from "./slices/destinationSlice";
import hotelsReducer from "./slices/hotelsSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        destination: destinationReducer,
        hotels: hotelsReducer,
    }
})