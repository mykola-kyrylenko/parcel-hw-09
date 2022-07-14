const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let intervalChangeColor;

startBtn.addEventListener('click', onStart);
function onStart() {
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled', 'disabled');

    intervalChangeColor = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

stopBtn.addEventListener('click', onStop);
function onStop() {
    startBtn.removeAttribute('disabled', 'disabled');
    stopBtn.setAttribute('disabled', 'disabled');

    clearInterval(intervalChangeColor);
};

