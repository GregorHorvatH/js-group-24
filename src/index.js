// ===== regex ====
// const text = 'DevTools failed to load SourceMap';

// console.log(text.replace(/ /g, '')); // замена всех пробелов на пустоту

// ====== spread =======
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// ====== rest =======
// function sum(a, b, ...rest) {
//   console.log(...rest);

//   return a + b;
// }

// console.log(sum(1, 1, 3, 4, 5, 6));

// ====== destructure =======
// const users = [
//   { id: 1, name: 'Bobby' },
//   { id: 2, name: 'Peter' },
// ];

// const getUserNames = arr => arr.map(({ name }) => name);

// console.log(users);
// console.log(getUserNames(users));

// ====== sort ======
// const numbers = [2, 1, 5, 10, 0, 3, -1, 4];

// numbers.sort((a, b) => {
//   // if (a < b) {
//   //   return 1;
//   // }

//   // if (a > b) {
//   //   return -1;
//   // }

//   // return 0;
//   return a - b;
// });

// console.log(numbers);

// ======= fibonacchi =======
// 3 --> [0,1,1,2,3,5...] --> 2
// 4 --> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
//        55, 89, 144, 233, 377, 610, 987,
//        1597, 2584, 4181, 6765, 10946, 17711] --> 4
// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// ======= example ========
//    5
//   2 6
//  8 3 7
// 3 1 6 9
// ........

// ======= array.indexOf(skills) === i ) ======
//               T  F  F  T  T  T  F
// const numbers = [1, 1, 1, 2, 3, 3, 3, 3, 3, 3]; // [1, 2, 3]

// const unique = numbers.filter((item, idx) => numbers.indexOf(item) === idx);

// ====== closures ======
// function a() {
//   const x = 5;

//   return function b() {
//     console.log(x);
//   };
// }

// const fn = a();
// fn();

// ===== reduce =====
// const getSortedUniqueSkills = array =>
//   array
//     .map(({ skills }) => skills)
//     .reduce((acc, skills) => [...acc, ...skills], []);

// ======= map =======
// const numbers = [1, 2, 3];
// const newArray = numbers.map((item, idx) => (numbers[idx] = 'hello'));

// console.log(numbers);
// console.log(newArray);

// ======= flatMap =======
// const array = [1, 2, 3, [4, 5, 6], [7, 8, 9]];

// console.log(array.flat());
