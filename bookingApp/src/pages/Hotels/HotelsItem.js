import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHotels } from "../../store/thunks/hotelsThunk";

import {Col, Divider, Pagination, Row} from "antd";

import { hotelsPhoto } from "../../helpers/hotelsPhoto";

console.log("API URL:", process.env.REACT_APP_API_URL);
export default function HotelsItem() {
    const hotels = useSelector((state) => state.hotels)
    const dispatch = useDispatch();

    const randomPhoto = () => {
        const randomIndex = Math.floor(Math.random(hotelsPhoto) * hotelsPhoto.length);
        return hotelsPhoto[randomIndex];
    }

    const handlePageChange = (page) => {
        dispatch(fetchHotels({page: page}));
        console.log("PAGE" ,page);
    };

    useEffect(() => {
        dispatch(fetchHotels({ page: 1}));
    },[dispatch]);

    console.log("Hotels" , hotels);

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