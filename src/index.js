// =======================================
// function sayHello() {
//   console.log('Hello');
// }

// =======================================
// get sum
// const numbers = [10, 11, 12]; // 3

// let acc = 0;

// numbers.forEach(function(item, index, arr) {
//   acc += item;
// });

// numbers.forEach((item, index, arr) => {
//   acc += item;
// });

// console.log('Sum:', acc);

// =======================================
// Array.prototype.reduce
// const numbers = [10, 11, 12]; // 3

// const sum = numbers.reduce((acc, item, index, arr) => {
//   return (acc += item);
// }, 0); // 0 - initialValue, accumulator

// console.log(sum);

// =======================================
// Array.prototype.reduce
// const goods = [
//   {
//     name: 'phone',
//     price: 1000,
//   },
//   {
//     name: 'pc',
//     price: 2000,
//   },
//   {
//     name: 'earphones',
//     price: 500,
//   },
// ];

// const sum = goods.reduce((acc, { price }) => acc + price, 0);

// console.log('Sum:', sum);

// =======================================
// Array.prototype.reduce
// min, max
// const numbers = [5, 3, -1, 0, 2, 4, 1];

// const min = numbers.reduce((acc, item) => {
//   return item < acc ? item : acc;
// }); // 0, 0, -1, -1, -1, -1

// const max = numbers.reduce((acc, item) => (item > acc ? item : acc));

// console.log('Min:', min);
// console.log('Max:', max);

// =======================================
// Array.prototype.reduce
// const letters = 'Позволяет сортировать элементы массива на месте.';
// // const res = {
// //   'H': 1,
// //   'e': 1,
// //   'l': 3,
// //   'o': 2
// // };
// const res = letters.split('').reduce((acc, letter) => {
//   return {
//     ...acc,
//     [letter]: acc[letter] ? acc[letter] + 1 : 1,
//   };
// }, {});

// console.log('Result:', res);

// =======================================
// Array.prototype.sort - mutating
// const numbers = [5, 3, -1, 0, 2, 10, 11, 20, 100, 4, 1];

// numbers.sort((a, b) => a - b);

// console.log(numbers);

// =======================================
// Array.prototype.sort - mutating
// const goods = [
//   {
//     name: 'pc',
//     price: 2000,
//   },
//   {
//     name: 'earphones',
//     price: 500,
//   },
//   {
//     name: 'phone',
//     price: 1000,
//   },
// ];

// goods.sort((a, b) => a.price - b.price);

// console.log(goods);

// =======================================
// Array.prototype.sort - mutating
// const goods = [
//   {
//     name: 'pc',
//     price: 2000,
//   },
//   {
//     name: 'earphones',
//     price: 500,
//   },
//   {
//     name: 'phone',
//     price: 1000,
//   },
// ];

// // a < b = -1
// // b < a = 1
// // a = b = 0
// goods.sort((a, b) => {
//   if (a.price < b.price) {
//     return -1;
//   }

//   if (a.price > b.price) {
//     return 1;
//   }

//   return 0;
// });

// console.log(goods);

// =======================================
// toggle
// let isOn = true;
// console.log('isOn:', isOn);

// isOn = !isOn; // !true
// console.log('isOn:', isOn);

// isOn = !isOn; // !false
// console.log('isOn:', isOn);

// isOn = !isOn; // !true
// console.log('isOn:', isOn);

// =======================================
// новый массив, содержащий их длины
// const arr = ['Есть', 'жизнь', 'на', 'Марсе'];

// const result = arr.map(word => word.length);

// console.log(result);

// =======================================
// [ 1, 3, 6, 10, 15 ]
// [-2,-3,-3,-2]
// const getSums = items =>
//   items.reduce((acc, item, idx) => {
//     return idx === 0 ? [item] : [...acc, acc[idx - 1] + item];
//   }, []);

// console.log(getSums([1, 2, 3, 4, 5]));
// console.log(getSums([-2, -1, 0, 1]));

// =======================================
// sayHello();

// import users from './users.js';

// console.log(users);
