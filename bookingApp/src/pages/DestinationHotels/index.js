import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHotels } from "../../store/thunks/hotelsThunk";

export default function DestinationHotels({ hotels }) {
    const dispatch = useDispatch();

    //const handlePageChange = (page) => {
    //    dispatch(fetchHotels(page));
    //};

    useEffect(() => {
        dispatch(fetchHotels());
    },[dispatch])

    return (
        <>
        </>
    )
}