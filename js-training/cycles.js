////////////// 1. Сума від 1 до n //////////////
// Напишіть функцію, яка приймає число n і обчислює суму всіх чисел від 1 до n.

// function calculate(number) {
//   let sum = 0;

//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }

//   return sum;
// }

////////////// 2. Таблиця множення //////////////
// Напишіть функцію, яка будує таблицю множення для числа n. Наприклад, якщо n = 5, результатом буде таблиця

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function tableOfMultiply(value) {
//   for (const num of array) {
//     let multiply = value * num;

//     console.log(`${value} * ${num} = ${multiply}`);
//   }
// }

// tableOfMultiply(8);

////////////// 3. Факторіал //////////////
// Напишіть функцію, яка приймає число n і обчислює його факторіал. Факторіал числа n (позначається як n!) визначається як добуток всіх натуральних чисел від 1 до n.

// function calculateFactorial(parameter) {
//   let factorial = 1;
//   for (let i = 1; i <= parameter; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }

// console.log(calculateFactorial(4));
// console.log(calculateFactorial(5));

////////////// 4. Прості числа (розібрати!!!) //////////////
// Напишіть функцію, яка приймає число n і перевіряє, чи є воно простим числом (тобто ділиться тільки на 1 і на самого себе).

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function printPrimes(n) {
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// printPrimes(10); // Виклик функції з прикладовим значенням 10

////////////// 5. Числа Фібоначчі //////////////
// Напишіть функцію, яка приймає число n і повертає n-те число Фібоначчі. Числа Фібоначчі визначаються як сума двох попередніх чисел, починаючи з 0 і 1.

// function fibonacci(n) {
//   let fib = [0, 1]; // початкові числа Фібоначчі

//   if (n < 0) {
//     return 'Введіть додатнє число'; // перевірка на некоректність вводу
//   }

//   for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2]; // обчислення наступного числа Фібоначчі
//   }

//   return fib[n]; // повернення n-го числа Фібоначчі
// }

// console.log(fibonacci(7)); // 13

// Відфільтрувати масив так, щоб у ньому залишилися лише числа (стрілкова функція)

// function filterStrings(array) {
//   return array.filter(element => typeof element !== 'string');
// }

// const input = [1, 'hello', 3, '12', 'world', '4'];
// const filteredArray = filterStrings(input);

// console.log(filteredArray);
