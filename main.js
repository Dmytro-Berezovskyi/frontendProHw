const rooms = [
    {
        id: 1,
        descriptions: "living_room",
        image: "img/living_room.jpg",
    },
    {
        id: 2,
        descriptions: "kitchen",
        image: "img/kitchen.jpg",
    },
    {
        id: 3,
        descriptions: "bedroom",
        image: "img/bedroom.jpg",
    },
    {
        id: 4,
        descriptions: "bathroom",
        image: "img/bathroom.jpg",
    },
    {
        id: 5,
        descriptions: "parking",
        image: "img/parking.jpg",
    },
];

const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
const dots = document.querySelector("#dots");
const img = document.querySelector("#img");

img.src = rooms[0].image;
let currentImg = 1;

btnNext.addEventListener("click", () => {
    if (currentImg <= rooms.length - 2) {
        currentImg++;
    };

    img.src = rooms[currentImg].image;
});

btnPrev.addEventListener("click", () => {
    if (currentImg >= 1) {
        currentImg--;
    };

    img.src = rooms[currentImg].image;
});