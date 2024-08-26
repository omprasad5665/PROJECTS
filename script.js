let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapTimes = [];
let timerInterval;

document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.querySelector('.start-button');
  const stopButton = document.querySelector('.stop-button');
  const resetButton = document.querySelector('.reset-button');
  const lapButton = document.querySelector('.lap-button');
  const lapTimesList = document.querySelector('.lap-times-list');

  startButton.addEventListener('click', startTimer);
  stopButton.addEventListener('click', stopTimer);
  resetButton.addEventListener('click', resetTimer);
  lapButton.addEventListener('click', lapTimer);

  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 10);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapTimes = [];
    lapTimesList.innerHTML = '';
    updateTimerDisplay();
  }

  function lapTimer() {
    const lapTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${padMilliseconds(milliseconds)}`;
    lapTimes.push(lapTime);
    const lapTimeElement = document.createElement('li');
    lapTimeElement.textContent = lapTime;
    lapTimesList.appendChild(lapTimeElement);
  }

  function updateTimer() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
      seconds += 1;
      milliseconds = 0;
    }
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    if (minutes >= 60) {
      hours += 1;
      minutes = 0;
    }
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    document.querySelector('.timer-display').textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${padMilliseconds(milliseconds)}`;
  }

  function pad(unit) {
    return String(unit).padStart(2, '0');
  }

  function padMilliseconds(unit) {
    return String(unit).padStart(3, '0');
  }
});
