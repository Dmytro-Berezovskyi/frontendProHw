//Initial setup
const timer = document.querySelector('#timer');

let initialTime = 70;

let secondsIntervalId = null;

//Function
function recordingFormat () {
    let minutes = Math.floor(initialTime / 60);
    let seconds = initialTime % 60;

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return `${minutes}:${seconds}`;
}

//Main
timer.innerHTML = recordingFormat();

document.querySelector("#start").addEventListener("click", () => {
    secondsIntervalId = setInterval(() => {
        if (initialTime !== 0) {
            initialTime--;
        }
        timer.innerHTML = recordingFormat();

        if (initialTime === 0) {
            clearInterval(secondsIntervalId);
        }
    },1000)
});

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(secondsIntervalId);
});