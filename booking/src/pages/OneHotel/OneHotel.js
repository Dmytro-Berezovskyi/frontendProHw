import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { fetchOneHotel } from "../../store/thunks/oneHotelThunk";

import { Divider, Rate } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function OneHotel() {
    const { id } = useParams();
    const hotel = useSelector(state => state.oneHotel.hotel);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneHotel({ id }))
    }, [dispatch]);

    return (
        <>
            {hotel.length !== 0 ? (
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{background: "grey", height: "60vh", width: "90%", marginLeft: "auto", marginRight: "auto"}}>
                        <img
                            src={hotel.photo} alt="hotel photo"
                            style={{width: "100%", height: "100%", objectFit: "cover"}}
                        />
                    </div>
                    <div style={{width: "90%", marginLeft: "auto", marginRight: "auto"}}>
                        <Divider orientation="left">
                            <h1 style={{textTransform: "uppercase", fontWeight: "800",fontSize: "25px", margin: 0}}>{hotel.name}
                                <Rate disabled value={hotel?.hotel_rating || 0} style={{marginLeft: "15px"}} />
                            </h1>
                        </Divider>

                        <div style={{display: "flex", gap: "20px"}}>
                            <span style={{color: "rgba(0,0,0,0.5)", fontStyle: "italic"}}>City: {hotel.city} {hotel.country_code}</span>
                            <span style={{color: "rgba(0,0,0,0.5)", fontStyle: "italic"}}>Address: {hotel.address}</span>
                            {hotel.phone_number ? (
                                <span style={{
                                    color: "rgba(0,0,0,0.5)",
                                    fontStyle: "italic"
                                }}>
                                    Phone number: {hotel.phone_number}
                                </span>
                            ) : null}
                            {hotel.website ? (
                                <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                                    <span style={{
                                        color: "rgba(0,0,0,0.5)",
                                        fontStyle: "italic"
                                    }}>
                                    Website: {hotel.website}
                                </span>
                                </a>
                            ) : null}

                        </div>

                        <p style={{fontWeight: "600", fontSize: "18px"}}>{hotel.description}</p>
                    </div>

                </div>
            ) : (
                <div style={{display: "flex", justifyContent: "center", gap: "10px", margin: "20px"}}>
                    <LoadingOutlined/>
                    <span style={{fontSize: "20px"}}>Loading...</span>
                </div>
            )}
        </>
    )
}