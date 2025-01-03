import HotelsItem from "./HotelsItem";

import {Divider, Pagination} from "antd";

export default function Hotels() {
    return (
        <>
            <Divider orientation="left">
                <h1 style={{textTransform: "uppercase", fontWeight: "800", fontSize: "25px", margin: 0}}>All Hotels</h1>
            </Divider>
            <h4 style={{marginLeft: "4%", color: "rgba(0,0,0,0.50)"}}>Choose the best hotel for yourself</h4>
            <HotelsItem/>
            <Pagination align="center" defaultCurrent={1} total={5}/>
        </>
    )
}