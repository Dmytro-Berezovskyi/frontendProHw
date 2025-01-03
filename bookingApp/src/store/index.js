import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";
import destinationReducer from "./slices/destinationSlice";
import hotelsReducer from "./slices/hotelsSlice";
import selectedHotelsSlice from "./slices/selectedHotelsSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        destination: destinationReducer,
        hotels: hotelsReducer,
        selectedHotels: selectedHotelsSlice,
    }
})