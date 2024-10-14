let link = "";

document.querySelector('.first_btn').addEventListener('click', () => {
    link = prompt("Enter your link (for example: google.com)");
});

document.querySelector('.second_btn').addEventListener('click', () => {
    location.href = "https://"+link;
});