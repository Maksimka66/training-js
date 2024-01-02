const setBtn = document.querySelector('.js-set');
const clearBtn = document.querySelector('.js-clear');
let timeoutId;

setBtn.addEventListener('click', () => {
  timeoutId = setTimeout(() => {
    console.log('I love async JS!');
  }, 2000);
  console.log(timeoutId);
});

clearBtn.addEventListener('click', () => {
  clearTimeout(timeoutId);
  console.log(`Timeout with id ${timeoutId} has stopped!`);
});
