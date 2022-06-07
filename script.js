const timerForm = document.querySelector('.timer-form');
const timerEl = document.querySelector('.timer');
const minutesEl = document.querySelector('.minutes');

class App {
  #timer;

  constructor() {
    timerForm.addEventListener('submit', this.startTimer.bind(this));
  }

  startTimer(e) {
    e.preventDefault();

    const validMinutes = mins => Number.isFinite(mins);
    const positiveMins = mins => mins > 0;

    const minutes = minutesEl.value;

    // Validate user input for minutes
    if (!validMinutes(minutes) && !positiveMins(minutes)) {
      minutesEl.value = '';
      return alert('Minutes have to be a positive number');
    }

    minutesEl.value = '';

    timerEl.textContent = minutes;
  }
}

const app = new App();
