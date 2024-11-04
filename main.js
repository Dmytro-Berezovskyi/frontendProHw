//Function
function renderWeather(data) {
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#weather-img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    document.querySelector('#main-weather').innerHTML = data.weather[0].description;
    document.querySelector('#humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('#pressure').innerHTML = `${data.main.pressure} kPa`;
    document.querySelector('#main-temp').innerHTML = `${Math.floor(data.main.temp)}&#176c`;
    document.querySelector('#max-temp').innerHTML = `${Math.floor(data.main.temp_max)}&#176c`;
    document.querySelector('#min-temp').innerHTML = `${Math.floor(data.main.temp_min)}&#176c`;
    document.querySelector('#feels_like-temp').innerHTML = `${Math.floor(data.main.feels_like)}&#176c`;
    document.querySelector('#wind').innerHTML = `${data.wind.speed} km/h`;
}

function refreshWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Prague&appid=5feb580c67bb3bcd2c582a5b11165414&units=metric').then((response) => {
        return response.json();
    }).then((data) => {
        renderWeather(data);
    });
}

function btnRotationAnimation () {
    let btnRefresh = document.querySelector('#btn-refresh');

    btnRefresh.classList.add('clicked');

    setTimeout(() => {
        btnRefresh.classList.remove('clicked');
    }, 1000)
}

function date() {
    const initialDate = new Date();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = days[initialDate.getDay()];
    const month = months[initialDate.getMonth()];
    const date = String(initialDate.getDate()).padStart(2, '0');
    const year = initialDate.getFullYear();


    document.querySelector('#date').innerHTML = `${month} ${date}, ${year} - ${day}`;;
}

function clock() {
    const initialClock = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Prague',
        hour12: false,
    };
    const formatter = new Intl.DateTimeFormat('cs-cz', options);

    document.querySelector('#time').innerHTML = formatter.format(initialClock);
}

//Main
fetch('https://api.openweathermap.org/data/2.5/weather?q=Prague&appid=' +
    '5feb580c67bb3bcd2c582a5b11165414&units=metric').then((response) => {
    return response.json();
}).then((data) => {
    renderWeather(data);
});

document.querySelector('#btn-refresh').addEventListener('click', ()=> {
    refreshWeather();

    btnRotationAnimation();
});

date();
clock();

setInterval(() => {
    clock();
}, 1000);
setInterval(() => {
    date();
}, 86400);