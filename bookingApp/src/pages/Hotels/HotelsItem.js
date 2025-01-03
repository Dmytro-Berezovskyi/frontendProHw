import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHotels } from "../../store/thunks/hotelsThunk";

import { Col, Divider, Row } from "antd";

import { hotelsPhoto } from "../../helpers/hotelsPhoto";

export default function HotelsItem() {
    const hotels = useSelector((state) => state.hotels)
    const dispatch = useDispatch();

    const randomPhoto = () => {
        const randomIndex = Math.floor(Math.random(hotelsPhoto) * hotelsPhoto.length);
        return hotelsPhoto[randomIndex];
    }

    useEffect(() => {
        dispatch(fetchHotels());
    },[dispatch])

    const hotelCard = hotels.hotels.map((hotel) => {
        return <Col span={6}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{background: "grey", height: "150px"}}>
                    <img src={randomPhoto()} alt="hotel photo" style={{width:"100%",height:"100%", objectFit: "cover"}} />
                </div>
                <h3>{hotel.name}</h3>
                <span>City: {hotel.city}</span>
                <span>Address: {hotel.address}</span>
            </div>
            <Divider style={{borderWidth: "3px"}}/>
        </Col>;
    });
    return (
        <>
            <Row justify="space-around" style={{width:"100%", gap:"10px"}}>
                {hotelCard}
            </Row>
        </>
    )
}