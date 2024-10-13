const first_btn = document.querySelector('.first_btn');
const second_btn = document.querySelector('.second_btn');

let link = "";

first_btn.addEventListener('click', () => {
    link = prompt("Enter your link (for example: google.com)");
});

second_btn.addEventListener('click', () => {
    location.href = "https://"+link;
});