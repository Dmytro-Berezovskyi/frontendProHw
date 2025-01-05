import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchHotels } from "../../store/thunks/hotelsThunk";

import {Col, Divider, Pagination, Row} from "antd";

export default function HotelsItem() {
    const hotels = useSelector((state) => state.hotels)
    const dispatch = useDispatch();

    const handlePageChange = (page) => {
        dispatch(fetchHotels({page: page}));
    };

    useEffect(() => {
        dispatch(fetchHotels({ page: 1}));
    },[dispatch]);

    const hotelCard = hotels.hotels.map((hotel) => {
        return  <Col span={6}>

                    <div style={{display: "flex", flexDirection: "column"}}>
                        <NavLink to={`/hotel/${hotel.id}`}>
                            <div style={{background: "grey", height: "150px"}}>
                                <img
                                    src={hotel.photo} alt="hotel photo"
                                    style={{width:"100%",height:"100%", objectFit: "cover"}}
                                />
                            </div>
                            <h3>{hotel.name}</h3>
                        </NavLink>
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
            <Pagination
                align="center"
                current={hotels.currentPage}
                total={hotels.total}
                pageSize={6}
                onChange={handlePageChange}
            />
        </>
    )
}