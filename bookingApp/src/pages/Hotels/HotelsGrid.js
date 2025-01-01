import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHotels } from "../../store/thunks/hotelsThunk";

import { Col, Divider, Row } from 'antd';

import HotelsItem from "./HotelsItem";

export default function HotelsGrid() {
    const hotels = useSelector((state) => state.hotels)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHotels());
    },[dispatch])
    console.log(hotels);
    return (
        <>
            <Divider orientation="left"><h1>Hotels</h1></Divider>
            <HotelsItem />
        </>
    )
}