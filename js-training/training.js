// Знайти два числа з масиву [1, 3, 5, 4, 6, 8, 6], які в сумі дають число 8

const numbers = [1, 3, 5, 4, 6, 8, 6];


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
