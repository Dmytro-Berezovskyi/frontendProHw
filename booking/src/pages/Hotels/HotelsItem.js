import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchHotels } from "../../store/thunks/hotelsThunk";

import {Col, Divider, Pagination, Row} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

export default function HotelsItem() {
    const hotels = useSelector((state) => state.hotels)
    const dispatch = useDispatch();

    const handlePageChange = (page) => {
        dispatch(fetchHotels({page: page}));
    };

    return (
        <>
            {hotels.hotels.length !== 0 ? (
                <Row justify="space-around" style={{width:"100%", gap:"10px"}}>
                    {hotels.hotels.map((hotel) => {
                        return  <Col span={6} key={hotel.id}>

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
                        </Col>})}
                </Row>
            ): (
                <div style={{display: "flex", justifyContent: "center", gap:"10px", margin: "20px"}}>
                    <LoadingOutlined />
                    <span style={{fontSize: "20px"}}>Loading...</span>
                </div>
            )}

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