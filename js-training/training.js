const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
let intervalId = null;

startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  console.log(`Interval with id ${intervalId} has stopped!`);
});

const date = new Date();
console.log(date);
