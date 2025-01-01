import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../store/thunks/hotelsThunk";

export default function Hotels() {
    const hotels = useSelector((state) => state.hotels)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHotels());
    },[dispatch])
    console.log(hotels);
    return (
        <>

        </>
    )
}