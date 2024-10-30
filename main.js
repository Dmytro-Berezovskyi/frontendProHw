const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const initialTime = "01:45";

let givenMinutes = initialTime.slice(0, 2);
let givenSeconds = initialTime.slice(3, 5);
minutes.innerHTML = givenMinutes;
seconds.innerHTML = givenSeconds;

let secondsIntervalId = null;
let minutesIntervalId = null;

document.querySelector("#start").addEventListener("click", () => {
    secondsIntervalId = setInterval(() => {
        if (givenSeconds !== "00") {
            givenSeconds--;
        }
        seconds.innerHTML = givenSeconds;
        if (givenSeconds < 10 && givenSeconds !== "00") {
            seconds.innerHTML = `0${givenSeconds}`;
        }
        if (givenSeconds === 0) {
            clearInterval(secondsIntervalId);
        }
    },1000)

    minutesIntervalId = setInterval(() => {
        givenMinutes--;
        minutes.innerHTML = givenMinutes;
        if (givenMinutes < 10) {
            minutes.innerHTML = `0${givenMinutes}`;
        }
        if (givenMinutes === 0) {
            clearInterval(minutesIntervalId);
        }
    }, 60000)
});

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(secondsIntervalId);
    clearInterval(minutesIntervalId);
});