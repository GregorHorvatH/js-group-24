// [1, 'bobby', null, true][2];
// (4) [1, "bobby", null, true]0: 11: "bobby"2: null3: truelength: 4__proto__: Array(0)

// index:    0, 1, 2, 3
// const arr = [1, 2, 3, 4];
// console.log(arr);

// const obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };
// console.log(obj);

// console.log(arr[0]);
// console.log(obj[0]);

// console.log(arr.length > 0);
// console.log(obj.length > 0);

// console.log(typeof arr);
// console.log(typeof obj);

// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// arr[2] = 33;
// console.log(arr);

// for (let i = 0; i < arr.length; i += 1) {
//   // arr[i] = 0;
//   const value = arr[i];

//   console.log(value);
// }

// const arr = [1, 2, 3, 4];

// for (let value of arr) {
//   console.log(value);
//   // value = 0; // not working
//   // console.log(value);
// }

// console.log(arr);

// arr.forEach(function(value) {
//   console.log(value);
// });

// break
// const arr = [1, 2, 3, 4];

// for (let value of arr) {
//   console.log(value);

//   if (value === 3) {
//     break;
//   }
// }

// continue
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let value of arr) {
//   if (value % 2 === 0) { // if even then continue
//     continue;
//   }

//   console.log(value);
// }

// example
// const arr = Object.entries({ name: 'Bobby', age: 15 });
// const obj = {};
// // console.log(arr);

// for (const keyValue of arr) {
//   // console.log(keyValue[0], keyValue[1]);
//   obj[keyValue[0]] = keyValue[1];
// }

// console.log(obj);

// exmaple, array copy
// const arr = [1, 2, 3];
// const arr2 = [...arr];

// split, join
// const text = 'Hello World!';
// console.log(text);

// const characters = text.split('');
// console.log(characters);

// const words = text.split(' ');
// console.log(words);

// example
// const text = 'Hello World!';
// const arr = text.split('');
// arr.reverse();

// console.log(arr.join(''));

// console.log(
//   'I love JS!'
//     .split('')
//     .reverse()
//     .join(''),
// );

// Проверка множественных условий с includes()
// const userRole1 = 'ADMIN';
// const userRole2 = 'USER';

// const superRoles = ['ADMIN', 'MANAGER', 'SUPERVISOR', 'SUPER_PUPER_USER'];

// // if (
// //   userRole1 === 'ADMIN' ||
// //   userRole1 === 'MANAGER' ||
// //   userRole1 === 'SUPERVISOR'
// // ) {
// //   console.log('welcome admin!');
// // }

// function checkUser(role) {
//   if (superRoles.includes(role)) {
//     console.log('welcome admin!');
//   } else {
//     console.log('welcome user!');
//   }
// }

// checkUser(userRole1);
// checkUser(userRole2);
// checkUser('MANAGER');

// concat
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);
// console.log([...oldClients, 4, 5, 6, ...newClients]);

// function
// fn1(1, 2, 3, 4, 5);

// function fn1(a, b, c, d) {
//   console.log(a, b, c, d);
// }

// const fn2 = function() {
//   console.log(...arguments);
//   console.log(Array.from(arguments));
// };

// const fn3 = () => console.log();

// fn2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// fn3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Array.from
// const obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };
// console.log(obj);

// const arr = Array.from(obj);
// console.log(arr);
// console.log(Array.isArray(arr));

// function return
// function fn1() {
//   // return undefined;
// }

// console.log(fn1());

// exmaple: key by value
const human = {
  name: 'Bobby',
  age: 15,
};

const dog = {
  name: 'Chappy',
  age: 3,
};

function getKeyByValue(obj, value) {
  const keyValues = Object.entries(obj);

  for (const item of keyValues) {
    // ['name', 'Bobby']
    if (item[1] === value) {
      return item[0];
    }
  }
}

console.log(getKeyByValue(human, 'Bobby'));
console.log(getKeyByValue(human, 15));
console.log(getKeyByValue(dog, 'Chappy'));
