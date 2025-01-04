const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./db.json");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/destination", (req, res) => {
    res.json(data.destination);
});

app.get("/hotels", (req, res) => {
    const { page= 1, limit = 6 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);

    const paginatedHotels = data.hotels.slice(startIndex, endIndex);

    res.status(200).json ({
        hotels: paginatedHotels,
        total: data.hotels.length,
    })
});
app.post("/hotels", (req, res) => {
    const { city } = req.body;
    const hotels = data.hotels.filter((hotel) => hotel.city === city);

    res.json(hotels);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));