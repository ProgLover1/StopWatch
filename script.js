let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;

function updateDisplay() {
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    timerDisplay.textContent = `${min}:${sec}:${ms}`;
}

function watchStart() {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(() => {
        milliseconds += 1;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        updateDisplay();
    }, 10); // 10ms interval
}

function watchStop() {
    clearInterval(interval);
    interval = null;
}

function watchReset() {
    clearInterval(interval);
    interval = null;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

startButton.addEventListener("click", watchStart);
stopButton.addEventListener("click", watchStop);
resetButton.addEventListener("click", watchReset);
