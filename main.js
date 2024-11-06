//Initial setup
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
const img = document.querySelector("#img");

//Function
function renderDots () {
    const dotsContainer = document.querySelector("#dots");

    rooms.forEach(room => {
        const dot = document.createElement("div");

        dot.innerHTML = `<div class="dot" id="dot" data-id="${room.id}"></div>`;

        dotsContainer.appendChild(dot);
    });
};

function goToImg(roomId) {
        img.src = rooms[roomId - 1].image;
};

function visibleInvisiblePrev () {
    if (currentImg >= 1) {
        btnPrev.classList.add("visible");
    } else {
        btnPrev.classList.remove("visible");
    };
};

function visibleInvisibleNext () {
    if (currentImg === rooms.length - 1) {
        btnNext.classList.add("none");
    } else {
        btnNext.classList.remove("none");
    };
};

function removeActiveDot () {
    dots.forEach(dot => dot.classList.remove("active"));
};

//Main
img.src = rooms[0].image;
renderDots();
const dots = document.querySelectorAll("#dot");
console.log(dots);
dots[0].classList.add("active");

let currentImg = 0;

btnNext.addEventListener("click", () => {
    if (currentImg <= rooms.length - 2) {
        currentImg++;
    };

    img.src = rooms[currentImg].image;
    removeActiveDot();
    dots[currentImg].classList.add("active");

    visibleInvisiblePrev();
    visibleInvisibleNext();
});

btnPrev.addEventListener("click", () => {
    if (currentImg >= 1) {
        currentImg--;
    };

    img.src = rooms[currentImg].image;
    removeActiveDot();
    dots[currentImg].classList.add("active");

    visibleInvisiblePrev();
    visibleInvisibleNext();
});

dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
        removeActiveDot();
        e.target.classList.add("active");

        const roomId = +e.target.getAttribute("data-id");

        if (roomId !== 0) {
            currentImg = roomId - 1;
        };

        visibleInvisiblePrev();
        visibleInvisibleNext();

        goToImg(roomId);
    });
});