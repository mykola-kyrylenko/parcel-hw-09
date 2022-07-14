import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};

const starbBtn = document.querySelector('[data-start]');
const calendarInput = document.querySelector('#datetime-picker');

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return {days, hours, minutes, seconds};
}

starbBtn.addEventListener('click', onStart);
calendarInput.addEventListener('focus', onFocus);

function onStart() {
    const chosenDate = Date.parse(calendarInput.value);
    
    if ((chosenDate - new Date().getTime()) < 0) {
        Notiflix.Notify.warning("Please choose a date in the future");
        return;
    } else {
        Notiflix.Notify.success('Timer was started)');
    }



    setInterval(() => {
        const dateNow = new Date().getTime();
        const ms = chosenDate - dateNow;
        if (ms < 0) return;

        const timer = convertMs(ms);
        starbBtn.setAttribute('disabled', 'disable');

        dataDays.textContent = timer.days.toString().padStart(2, 0);
        dataHours.textContent = timer.hours.toString().padStart(2, 0);
        dataMinutes.textContent = timer.minutes.toString().padStart(2, 0);
        dataSeconds.textContent = timer.seconds.toString().padStart(2, 0); 
    }, 1000);
};

function onFocus() {  
    flatpickr(calendarInput, options);
};
