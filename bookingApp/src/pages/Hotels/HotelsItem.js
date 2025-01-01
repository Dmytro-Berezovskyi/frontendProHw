import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../store/thunks/hotelsThunk";

import { Col, Divider, Row } from 'antd';

export default function HotelsItem() {
    const hotels = useSelector((state) => state.hotels)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHotels());
    },[dispatch])
    console.log(hotels.hotels[3]);
    const hotelCard = hotels.hotels.map((hotel) => {
        return <Col span={6}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{background: 'grey', height: '150px'}}>
                    <img src='' alt='' />
                </div>
                <h3>{hotel.name}</h3>
                <span>city: {hotel.city}</span>
                <span>address: {hotel.address}</span>
            </div>
            <Divider style={{borderWidth: '3px'}}/>
        </Col>;
    });
    return (
        <>
        <Row justify="center" style={{width:'100%', gap:'10px'}}>
                {hotelCard}
            </Row>
        </>
    )
}