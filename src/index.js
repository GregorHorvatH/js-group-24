// NOT pure function
// const numbers = [1, 2, 3, 4];

// function multiply(arr, x) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= x;
//   }
// }

// multiply(numbers, 2);

// console.log(numbers); // [2, 4, 6, 8]

// pure function
// const numbers = [1, 2, 3, 4];

// function multiply(arr, x) {
//   const res = [...arr];

//   for (let i = 0; i < res.length; i += 1) {
//     res[i] *= x;
//   }

//   return res;
// }

// console.log(multiply(numbers, 2)); // [2, 4, 6, 8]
// console.log(numbers); // [1, 2, 3, 4]

// array, this
// Array.prototype.myFilter = function myFilter(callback) {
//   const res = [];

//   for (let i = 0; i < this.length; i += 1) {
//     if (callback(this[i])) {
//       res.push(this[i]);
//     }
//   }

//   return res;
// };

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.myFilter(x => x > 3));

// Array.filter - pure function
// const numbers = [1, 2, 3, 4, 5];

// /**
//  * Returns a filtered array
//  * @param {array} arr
//  * @param {function} callback
//  */
// function filter(arr, callback) {
//   const res = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       res.push(arr[i]);
//     }
//   }

//   return res;
// }

// // console.log(filter(numbers, item => item > 3));
// console.log(numbers.filter(item => item > 3));

// Array.forEach - pure function
// const numbers = ['apple', 'orange', 'strawberry'];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`index: ${i}, value: ${numbers[i]}`);
// }

// numbers.forEach((value, index) =>
//   console.log(`index: ${index}, value: ${value}`),
// );

// Array.map
// const users = ['Bobby', 'Peter', 'Chris', 'Vernon'];

// const userItems = users.map((value, index, arr) => {
//   const className = index % 2 === 0 ? 'red' : 'orange';

//   return `<li class="user-item ${className}">${value}</li>`;
// });

// document
//   .getElementById('user-list')
//   .insertAdjacentHTML('afterbegin', userItems.join(''));

// console.log(userItems);

// Array.map - pure function
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map(value => value * 2);

// console.log(numbers);
// console.log(newNumbers);

// Array.map with objects
// const numbers = [
//   {
//     id: 1,
//     name: 'Bobby',
//     surname: 'Ivanov',
//   },
//   {
//     id: 2,
//     name: 'Peter',
//     surname: 'Petrov',
//   },
//   {
//     id: 3,
//     name: 'Peter',
//     surname: 'Parker',
//   },
// ];
// console.log(numbers.map(user => user.name));
// console.log(numbers.map(({ id, name }) => ({ id, name })));

// Array.find - pure function
// const numbers = [
//   {
//     id: 1,
//     name: 'Bobby',
//     surname: 'Ivanov',
//   },
//   {
//     id: 2,
//     name: 'Peter',
//     surname: 'Petrov',
//   },
//   {
//     id: 3,
//     name: 'Peter',
//     surname: 'Parker',
//   },
// ];

// const userName = 'pEteR';
// console.log(
//   numbers.find(user => user.name.toLowerCase() === userName.toLowerCase()),
// );

// Array.prototype.every
// const numbers1 = [1, 2, 3, 4, 5];
// const numbers2 = [3, 4, 5];

// const everyNumberIsLargerTwo1 = numbers1.every(value => value > 2);
// const everyNumberIsLargerTwo2 = numbers2.every(value => value > 2);

// console.log(everyNumberIsLargerTwo1);
// console.log(everyNumberIsLargerTwo2);

// Array.prototype.every
// const numbers1 = [1, 2, 3, 4, 5]; // true
// const numbers2 = [-5, 1, 2]; // false

// const someNumberIsLargerTwo1 = numbers1.some(value => value > 2);
// const someNumberIsLargerTwo2 = numbers2.some(value => value > 2);

// console.log(someNumberIsLargerTwo1);
// console.log(someNumberIsLargerTwo2);

// Array chaining
// const text = 'Hello World';

// // const letters = text.split('');
// // letters.reverse();
// // console.log(letters.join(''));

// console.log(
//   text
//     .split('')
//     .reverse()
//     .join(''),
// );

// Array.map
// объясните, пожалуйста, как работает деструктурирующее присваивание
// для параметра функции и как его применять на практике

// const numbers = [
//   {
//     id: 1,
//     name: 'Bobby',
//     surname: 'Ivanov',
//   },
//   {
//     id: 2,
//     name: 'Peter',
//     surname: 'Petrov',
//   },
//   {
//     id: 3,
//     name: 'Peter',
//     surname: 'Parker',
//   },
// ];

// // example 1, step 1
// console.log(
//   numbers.map(function(obj) {
//     return obj.name;
//   }),
// );

// // example 1, step 2
// console.log(
//   numbers.map(function({ name }) {
//     return name;
//   }),
// );

// // exmaple 2, step 1
// console.log(
//   numbers.map(function(obj) {
//     return {
//       name: obj.name,
//       surname: obj.surname,
//     };
//   }),
// );

// // exmaple 2, step 1
// console.log(
//   numbers.map(function(obj) {
//     return {
//       name: obj.name,
//       surname: obj.name,
//     };
//   }),
// );

// // exmaple 2, step 2
// console.log(
//   numbers.map(function({ name, surname }) {
//     return {
//       name,
//       surname,
//     };
//   }),
// );

// // exmaple 2, step 3
// console.log(numbers.map(({ name, surname }) => ({ name, surname })));

// ================================
// есть класс Hero
// class Hero {
//   constructor(name, xp) {
//     this._name = name;
//     this.xp = xp;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     this._name = name;
//   }
// }

// const mango = new Hero('Mango', 1000); // создали обьект mango

// mango.name = 'Set new name'; // засетили новое имя
// console.log(mango.name); // будет пустая строка. почему не undifined?

// ================================
// import utils from './utils.js';

// utils.sayBye();

// console.log(utils);
