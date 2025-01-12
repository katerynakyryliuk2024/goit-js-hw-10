
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const myInput = document.querySelector(".load-input");
const startBtn = document.querySelector('.load-btn');

let userSelectedDate = null;
startBtn.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date() ) {
      return iziToast.show({
         color: 'red',
    message: "Please choose a date in the future"
});
    } else {
      userSelectedDate = selectedDates[0];
      startBtn.disabled = false;
    }
    
  },
};


const fp = flatpickr(myInput, options);

const elements = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}

console.log(elements);

startBtn.addEventListener('click', () => { 
  startBtn.disabled = true;
  myInput.setAttribute('disabled', 'disabled');
  const intervalİD = setInterval(() => {
    const diff = userSelectedDate - new Date();
    const timeComponents = convertMs(diff)

    elements.days.textContent = addLeadingZero(timeComponents.days);
    elements.hours.textContent = addLeadingZero (timeComponents.hours);
    elements.minutes.textContent = addLeadingZero (timeComponents.minutes);
    elements.seconds.textContent = addLeadingZero (timeComponents.seconds);
   
  }, 1000);
  
})

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
 

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}