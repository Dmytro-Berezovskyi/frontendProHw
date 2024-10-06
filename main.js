const img = document.querySelector('.random_img');

let randomNum = Math.floor((Math.random() * (9 - 1 + 1) + 1));
img.src = `./img/${randomNum}.jpg`;


console.log(randomNum);