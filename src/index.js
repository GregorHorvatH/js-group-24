// const myFunction = name => {
//   // выполнится третьим, спустя 2 секунды
//   console.log('Hello', name);
// };

// // выполнится первым
// console.log('First');

// setTimeout(myFunction, 1000, 'Bobby'); // 4ms

// // выполнится вторым
// console.log('Third');

//  ========== clearTimeout ==========
// const id = setTimeout(() => console.log('sdfg'), 1000);
// console.log(id);

// clearTimeout(id);

//  ========== setInterval ==========
// const id = setInterval(() => {
//   console.log(new Date());
// }, 1000);

// console.log('id:', id);

//  ========== this ==========
// const obj = {
//   name: 'Bobby',

//   sayHello() {
//     console.log(this.name);
//   },
// };

// setTimeout(obj.sayHello.bind(obj), 1000);

// ========== example with if and timeout ==========
// eslint-disable-next-line
// for (var i = 0; i < 10; i += 1) {
//   setTimeout(function() {
//     console.log(i);
//   }, 10);
// }

// ========== new Date ==========
// const now = new Date();
// console.log(now.getMonth());

// const date1 = new Date('March 4, 2017');
// console.log(date1);

// const date2 = new Date(2020, 11, 1);
// console.log(date2.getTime());

// const start = Date.now();
// console.log(start);

// for (let i = 0; i < 100000000; i += 1) {
//   Math.random();
// }

// const end = Date.now();
// console.log(end);

// console.log(end - start);

// ========== format date ==========
const date = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const localeUk = date.toLocaleString('Ru-ru', options);
console.log(localeUk);

const yyyy = date.getFullYear();
const mm = date.getMonth() + 1;
const dd = date.getDate();

console.log(`${yyyy}-${mm}-${dd}`);
