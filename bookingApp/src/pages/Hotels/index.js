import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestination } from "../../store/thunks/hotelThunk";

export default function Hotels() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDestination());
    },[])
    return (
        <>

        </>
    )
}