//! Callback
//TODO:============task-01=========================
//  1. Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// const calculate = (a, b, callback) => {
//   let resultForCallback = callback(a * b);
//   return resultForCallback;
// };

// function ourNumber(result) {
//   return result % 2 === 0 ? Math.pow(result, 2) : Math.sqrt(result);
// }

// console.log(calculate(5, 7, ourNumber));
// console.log(calculate(4, 2, ourNumber));
// console.log(calculate(1, 9, ourNumber));
// console.log(calculate(5, 8, ourNumber));

//TODO:============task-02=========================
// 2. Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

const numbers = [1, 2, 5, 7, 9, 20];
const words = ['apple', 'banana', 'orange', 'pear'];

const highOrder = (array, callback) => {
  let element = 0;
  if (callback(element)) {
    return element;
  } else {
    return null;
  }
};

const callbackFirst = array => {
  for (const symbol of array) {
    if (symbol % 2 === 0) {
      return (symbol = element);
    }
  }
};

const callbackSecond = array => {
  const letter = toUpperCase('o');
};

console.log(highOrder(numbers, callbackFirst));
