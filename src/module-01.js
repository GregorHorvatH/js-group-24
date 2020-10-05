'use strict';

// const SKY_BLUE = 'blue';
// const SKY_GREEN = 'green';

// const a = 10;

// console.log('a:', a);
// console.log(SKY_BLUE);
// console.log(SKY_GREEN);

// hoisting
// console.log(a); // undefined
// console.log(b); // Cannot access 'b' before initialization

// var a = 15;
// let b = 20;

// fn1();

// function fn1() {
//   console.log('234');
// }

// Типы примитивов
// Number
// const age = 20;
// const number = 5.8;

// // String
// const name = 'Mango';
// const onByte = 'a';

// // Boolean
// const isAuthenticated = true;
// const canMerge = false;

// // null
// let obj = null;
// console.log(typeof null);

// obj = null;
// console.log(obj === null);

// // undefined
// var a = 'sdfsdg';

// // typeof
// if (typeof a === 'undefined') {
//   // return string
//   console.log('A Is Undefined');
// }

// %
// console.log(13 / 5); // 2.6
// console.log(13 % 5); // 13 - 10 = 3
// console.log(2 % 2); // 0
// console.log(3 % 2); // 1

// for (let i = 0; i < 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i, '- Chetnoe');
//   } else {
//     console.log(i, '- Ne chetnoe');
//   }
// }

// ++, --, +=, -= ...
// let x = 1;
// console.log(x); // 1

// x = x + 1;
// console.log(x); // 2

// x += 1; // x = x + 1;
// console.log(x); // 3

// x++; // x = x + 1;
// console.log(x); // 4

// console.log(x++); // 4
// console.log(x); // 5

// console.log(++x); // 6

// while do...
// let x = 1;

// while (x <= 10) {
//   console.log(x++);
//   // x += 1;
// }

// >, <, >=, <=, !=
// const x = 5;

// if (x) {
//   console.log('Hurray - NUMBER!');
// }

// const text = '0';

// if (text) {
//   console.log('Hurray - TEXT!');
// }

// example
// Почему в таком коде возвращает true:
// const login = 'Zod';
// const min = 4;
// const max = 16;

// console.log(min <= login.length <= max); // true

// exmaple 2
// const x = 0;
// const y = 15;

// //  true  --> true
// if (x < 0 && y > 0) {
//   console.log('first true');
// }

// //  false --> true
// if (x < 0 || y > 0) {
//   console.log('second true');
// }

// console.log(x > 0 ? x : y);
// console.log(x || y);

// const a = 'aaaa';
// const b = 'sdfg';
// console.log(a || b.alkjdsfh());

// example
// посчитать сумму всех чисел
// const x = 11111; // 1 + 2 + 3 ... 7

// function getSum(x) {
//   const text = String(x);

//   let sum = 0;
//   for (let i = 0; i < text.length; i += 1) {
//     const num = Number(text[i]);

//     sum += num;
//   }

//   return sum;
// }

// console.log(getSum(11111));
// console.log(getSum(1234567));

// Шаблонные строки и интерполяция
// const name = 'Bobby';
// console.log(`Hello, my name is ${name}!`);
// console.log('Hello, my name is ' + name + '!');

// switch case
// const day = 20;

// if (day === 1) {
//   console.log('Monday');
// } else if (day === 2) {
//   console.log('Tuesday');
// } else if (day === 3) {
//   console.log('Wednesday');
// } else {
//   console.log('unknown');
// }

// function getDay(day) {
//   switch (day) {
//     case 1: // false
//       console.log('Monday');
//       break;
//     // return 'Monday';
//     case 2: // true
//       console.log('Tuesday');
//       break;
//     // return 'Tuesday';
//     case 3:
//       console.log('Wednesday');
//       break;
//     // return 'Wednesday';
//     case 6:
//     case 7:
//       console.log('Weekend!!!!');
//       break;
//     default:
//       // console.log('unknown');
//       return 'unknown';
//   }
// }

// getDay(7);

// console.log(getDay(1));
// console.log(getDay(2));
// console.log(getDay(3));

// ternary
// const x = -5;

// // if (x > 0) {
// //   console.log('BIG');
// // } else {
// //   console.log('SMALL');
// // }

// console.log(x > 0 ? 'BIG' : 'SMALL');

// const day = 3;
// // if (day === 1) {
// //   console.log('Monday');
// // } else if (day === 2) {
// //   console.log('Tuesday');
// // } else if (day === 3) {
// //   console.log('Wednesday');
// // } else {
// //   console.log('unknown');
// // }

// console.log(
//   day === 1
//     ? 'monday'
//     : day === 2
//     ? 'tuesday'
//     : day === 3
//     ? 'wednesday'
//     : 'unknown',
// );

// Область видимости
// var a = 5;

// function fn1() {
//   var b = 6;

//   function fn2() {
//     console.log(b);
//   }

//   console.log(a);
//   fn2();
// }

// fn1();

// console.log(a); // 5
// console.log(b); // exception undefined

// example with for
// for (var i = 1; i < 10; i += 1) {
//   // console.log(i); // 1,2,3,4 ... 9
// }

// console.log(i);

// example with { ... }
// {
//   var x = 1;
// }

// console.log(x);

