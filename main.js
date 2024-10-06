const header = document.querySelector(".h1");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    if (header.classList.contains("h1_grey")) {
        header.classList.remove("h1_grey");
        header.classList.add("h1_blue");
    } else if (header.classList.contains("h1_blue")) {
        header.classList.remove("h1_blue");
        header.classList.add("h1_grey");
    }
});