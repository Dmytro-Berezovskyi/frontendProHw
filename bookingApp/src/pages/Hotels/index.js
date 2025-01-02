import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Divider, Pagination} from "antd";

import { fetchHotels } from "../../store/thunks/hotelsThunk";

import HotelsItem from "./HotelsItem";


export default function Hotels() {
    const hotels = useSelector((state) => state.hotels)
    const dispatch = useDispatch();

    //const handlePageChange = (page) => {
    //    dispatch(fetchHotels(page));
    //};

    useEffect(() => {
        dispatch(fetchHotels());
    },[dispatch])

    return (
        <>
            <Divider orientation="left"><h1>Hotels</h1></Divider>
            <HotelsItem />
            <Pagination align="center" defaultCurrent={1} total={5} />
        </>
    )
}

//{hotels.map((hotel) => (<HotelsItem key={hotel.id} hotel={hotel} />))}