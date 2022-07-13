const timerForm = document.querySelector('.timer-form');
const timerEl = document.querySelector('.timer');
const minutesEl = document.querySelector('.minutes');

class App {
  constructor() {
    timerForm.addEventListener('submit', this._startTimer.bind(this));
  }

  _getCountdownTime(inputMinutes) {
    const seconds = inputMinutes * 60;

    // Get hours, minutes and seconds
    const hours = String(Math.floor(inputMinutes / 60)).padStart(2, 0);
    const mins = String(inputMinutes % 60).padStart(2, 0);
    const secs = String(seconds % 60).padStart(2, 0);

    return [hours, mins, secs];
  }

  _startTimer(e) {
    e.preventDefault();

    // Clear input box
    minutesEl.value = '';

    const validMinutes = mins => Number.isFinite(mins);
    const positiveMins = mins => mins > 0;

    let inputMinutes = minutesEl.value;

    // Validate user input for minutes
    if (!validMinutes(inputMinutes) && !positiveMins(inputMinutes)) {
      return alert('Minutes have to be a positive number');
    }

    const [hours, mins, secs] = this._getCountdownTime(inputMinutes);
    console.log(hours, mins, secs);

    timerEl.textContent = `${hours}:${mins}:${secs}`;
  }
}

const app = new App();
