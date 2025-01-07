import { store } from "../store";

import { fetchHotels } from "../store/thunks/hotelsThunk";
import { fetchDestination } from "../store/thunks/destinationThunk";

export const hotelsLoader = async () => {
    const hotels = await store.dispatch(fetchHotels({ page: 1 }));

    return hotels.payload;
}

export const destinationLoader = async () => {
    const destinationHotels = await store.dispatch(fetchDestination());

    return destinationHotels.payload;
}