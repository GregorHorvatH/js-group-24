// Функция высшего порядка
// function sayHello(x, callback) {
//   console.log('Hello!', x);

//   // if (callback && typeof callback === 'function') {
//   // Функция обратного вызова (callback)
//   callback();
//   // }
// }

// function fn() {
//   console.log('some function');
// }

// const a = 1;
// sayHello(a, fn);

// fn();
// console.log(sayHello);

// exmaple, filter: x > 3 --> [4, 5, 6]
// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(filter(numbers, x => x > 3)); // x > 3 --> [4, 5, 6]
// console.log(filter(numbers, x => x < 4)); // x < 4 --> [1, 2, 3]
// console.log(filter(numbers, x => x < 3 || x > 4)); // x < 3 && x > 4 --> [1, 2, 5, 6]

// function filter(arr, callback) {
//   const result = [];

//   for (const value of arr) {
//     if (callback(value)) {
//       result.push(value);
//     }
//   }

//   return result;
// }

// exmaple, find: x === 3
// function find(arr, callback) {
//   const result = [];

//   for (const value of arr) {
//     if (callback(value)) {
//       return value;
//     }
//   }

//   // return undefined;
// }

// console.log(find(numbers, x => x === 3)); //
// console.log(find(numbers, x => x === 7));
// console.log(find(numbers, x => x > 1));
// console.log(find(numbers, x => x > 5));

// exmaple, indexOf: x === 3 --> 2
// const fruits = ['apple', 'orange', 'strawberry'];

// function indexOf(arr, callback) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i])) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(indexOf(fruits, fruit => fruit === 'apple')); // 0
// console.log(indexOf(fruits, fruit => fruit === 'strawberry')); // 2
// console.log(indexOf(fruits, fruit => fruit === 'jhfg')); // -1

// exmaple, map
// const fruits = ['apple', 'orange', 'strawberry'];

// function transform(x) {
//   return `<li>${x}</li>`;
// }

// function map(arr, callback) {
//   const result = [];

//   for (const item of arr) {
//     result.push(callback(item));
//   }

//   return result;
// }

// console.log(map(fruits, transform));
// console.log(map(fruits, x => `<li class="list-item">${x}</li>`));

// Лексическое окружение (lexical environment)
// const a = 1;

// // [[Environment]] - Global
// // { a: 1 }
// function fn(x) {
//   const a = 10;
//   const b = 2;

//   console.log('a:', a);
//   console.log('b:', b);
//   console.log('x:', x);
// }

// // [[Local]]
// // { a: 10, b: 2, x: 5 }
// fn(5);

// exmaple
// const numbers = [1, 2, 3, 4, 5]; // x > 3 --> [4, 5]

// console.log(numbers.filter(item => item > 3));
// console.log(numbers.filter(item => item < 3 || item > 3));
