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
// який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [84, 2, 5, 7, 9, 20];
// const words = ['apple', 'omlet', 'orange', 'pear'];

// const highOrder = (array, callback) => {
//   let result = null;
//   for (const symbol of array) {
//     if (callback(symbol)) {
//       result = symbol;
//       break;
//     }
//   }
//   return result;
// };

// const callbackFirst = element => element % 2 === 0;

// const callbackSecond = element => element.toUpperCase().startsWith('O');

// console.log(highOrder(numbers, callbackFirst));
// console.log(highOrder(words, callbackSecond));

//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const createNewArray = (array, pow) => {
//   return array.map(element => Math.pow(element, pow));
// };
// console.log(createNewArray(numbers, 2));

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const arrayOfObjects = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const valuesOfObject = array => {
//   return array.flatMap(object => object.values);
// };

// console.log(valuesOfObject(arrayOfObjects));

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// function checkingAge(array) {
//   return array.some(object => object.age < 20);
// }

// console.log(checkingAge(people));

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const evenNums = [2, 4, 6, 8, 10];

// const checkingEven = array => array.every(element => element % 2 === 0);

// console.log(checkingEven(evenNums));

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 7.

// const nums = [7, 2, 3, 4, 5];

// const firstElem = arrayOfNumbers => arrayOfNumbers.find(element => element > 3);

// console.log(firstElem(nums));

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

//TODO:===============task-8===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const persons = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const sort = array => array.toSorted((a, b) => a.age - b.age);

// console.log(sort(persons));

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const nums = [21, 19, 7, 4, 5];

// const calculateSum = arr => arr.reduce((acum, element) => acum + element, 0);

// console.log(calculateSum(nums));

//TODO:=========task-11=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const firstArrOfNums = [25, 7, 4, 12, 5];
// const secondArrOfNums = [1, 2, 3, 4, 5];

// const calculateValue = arr =>
//   arr.reduce((acc, num) => acc + num / arr.length, 0);

// console.log(calculateValue(firstArrOfNums));
// console.log(calculateValue(secondArrOfNums));

// ! this
//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить повну інформацію про користувача.// ДОРОБИТИ!!!

// const user = {
//   name: 'Maxim',
//   surname: 'Krukov',
//   age: 22,
//   email: 'maxfese@gmail.com',

//   info() {
//     console.log(this);
//   },
// };

// user.info();

// Знайти два числа з масиву [1, 3, 5, 4, 6, 8, 6], які в сумі дають число 8

// const numbers = [1, 3, 5, 4, 6, 8, 6];

// Перше рішення

// let targetSum = 8;

// function findNumberPair(numbers, targetSum) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === targetSum) {
//         return [numbers[i], numbers[j]];
//       }
//     }
//   }

//   return [];
// }

// let result = findNumberPair(numbers, targetSum);
// console.log(result);

// Друге рішення

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (const num of arr) {
//     let result = num + arr[i];
//     if (result === 8 && num !== arr[i]) {
//       sum = `[${num}, ${arr[i]}]`;
//       break;
//     }
//   }
// }
// console.log(sum);
