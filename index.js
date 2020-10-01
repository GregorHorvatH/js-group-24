// array
// const users = [
//   {
//     name: 'Bobby',
//     eyes: 'green',
//     age: 15,
//     legs: ['left', 'right'],
//     hands: ['left', 'right'],
//     hair: true,
//     chrildren: {
//       boys: [],
//       girls: [],
//     },
//   },
//   {
//     name: 'Chris',
//     eyes: 'green',
//     age: 20,
//     legs: ['left', 'right'],
//     hands: ['left', 'right'],
//     hair: true,
//     chrildren: {
//       boys: [],
//       girls: [],
//     },
//   },
// ];

// // console.log(obj);
// // console.log(users);

// // for (let i = 0; i < users.length; i += 1) {
// //   const user = users[i];

// //   console.log(user.name, user.age);
// // }

// // primitives
// const a = 1;
// const b = 'sdfgf';

// // object
// const obj = {
//   name: 'Bobby',
//   eyes: 'green',
//   age: 15,
//   legs: ['left', 'right'],
//   hands: ['left', 'right'],
//   hair: true,
//   chrildren: {
//     boys: [],
//     girls: [],
//   },
//   innerObject: {
//     innerKey: 456,
//   },
// };

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.legs);

// obj.age = 16;
// console.log(obj);

// // Доступ к свойствам
// const key = 'eyes';
// console.log(obj['eyes']);
// console.log(obj[key]);

// // Удаление свойств
// delete obj.chrildren;
// console.log(obj);

// // Отсутствующие свойства
// console.log(obj.jdhfbss);
// console.log(obj.age + 14);

// console.log(obj.innerObject.innerKey);

// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// console.log(obj && obj.oiuy && obj.oiuy.kjhgkjg);
// console.log(obj?.oiuy?.kjhgkjg);

// // Короткие свойства
// const name = 'Peter';
// const age = 20;
// const eyes = 'blue';

// // const human = {
// //   name: name,
// //   age: age,
// //   eyes: eyes,
// // };
// const human = {
//   name,
//   age,
//   eyes,
// };
// console.log(human);

// // Вычисляемые свойства
// const getValue = (obj, key) => {
//   return obj[key];
// };

// const cat = {
//   name: 'Kit-Kat',
//   age: 2,
// };

// const dog = {
//   name: 'Chappy',
//   age: 4,
// };

// console.log(getValue(cat, 'name')); // 'Kit-Kat'
// console.log(getValue(cat, 'age')); // 2

// console.log(getValue(dog, 'name'));
// console.log(getValue(dog, 'age'));

// console.log(getValue(obj, 'hands'));

// v.2
// const key = 'eyes';
// const human2 = {};

// human2.sjkdfhg = 456;
// human2.name = 'Chris';
// human2.age = 30;
// human2[key] = true;

// console.log(human2);

// Методы объекта
// const human = {
//   name: 'Bobby',
//   age: 15,

//   work: function () {
//     console.log('I`m working!');
//   },

//   walk() {
//     console.log('I`m walking!');
//   },

//   sayHello() {
//     console.log(`Hello my name is ${this.name}`);
//   },

//   birthdayHappened() {
//     this.age += 1;
//   },
// };

// // console.log(human);
// human.work();
// human.walk();

// // Доступ к объекту через this
// console.log(human);

// human.birthdayHappened();
// console.log(human);

// human.birthdayHappened();
// console.log(human);

// human.sayHello();

// human.name = 'Peter';
// human.sayHello();

// Перебор объектов
// const obj = {
//   name: 'Bobby',
//   eyes: 'green',
//   age: 15,
//   hair: true,
// };

// const keys = Object.keys(obj);
// console.log(keys);

// const values = Object.values(obj);
// console.log(values);

// const entries = Object.entries(obj);
// console.log(entries);

// // Цикл for...in
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// example
// const obj = {
//   name: 'Bobby',
//   eyes: 'green',
//   age: 15,
//   hair: true,
//   salary: 1000,
//   sdfg: 98,
// };

// const values = Object.values(obj);
// console.log(values);

// let sum = 0;
// for (const value of values) {
//   console.log(value);

//   if (typeof value === 'number') {
//     sum += value;
//   }
// }

// for (const key in obj) {
//   // console.log('Key: ', key);
//   const value = obj[key];

//   if (typeof value === 'number') {
//     sum += value;
//   }
// }

// console.log('sum:', sum);

// exmaple
// const phone = {
//   model: 'ERTYU',
//   battery: 100,
//   isOn: false,

//   turnOn() {
//     this.isOn = true;
//   },

//   work(time) {
//     if (this.battery - time < 0) {
//       this.battery = 0;
//     } else {
//       this.battery -= time;
//     }
//   },

//   charge(time) {
//     if (this.battery + time > 100) {
//       this.battery = 100;
//     } else {
//       this.battery += time;
//     }
//   },
// };

// console.log(phone);

// phone.turnOn();
// console.log(phone);

// phone.work(80);
// console.log(phone);

// phone.work(30);
// console.log(phone);

// phone.charge(80);
// console.log(phone);

// phone.charge(30);
// console.log(phone);

// answer 1
// const obj = {};
// const cart = [1, 2, 3];
// let total = 0;

// for (const value of cart) {
//   // 1, // 2, // 3
//   total += value;
// }

// console.log('Total: ', total); //6

// answer 2
// function fn1() {
//   console.log('Hello from FN1');
// }

// const fn2 = () => console.log('Hello from FN2');

// fn1();
// fn2();

// answer 3
// const obj = {
//   name: 'Bobby',
// };
// const key = 'name';

// console.log(obj[key]); // obj // key

// example - reference
// array
// const arr1 = [1, 1, 1];
// // const arr2 = arr1;
// const arr2 = [...arr1];

// console.log(arr1);
// console.log(arr2);

// arr1[0] = 100000;
// console.log(arr1);
// console.log(arr2);

// // obj
// const obj1 = { name: 'Bobby', age: 15 };
// // const obj2 = obj1;
// const obj2 = { ...obj1 };
// console.log(obj1);
// console.log(obj2);

// obj1.age = 3333;
// console.log(obj1);
// console.log(obj2);

// answer 4
// for (let a = 0; a < 2; a += 1) {
//   console.log(a); // 0

//   // a += 1
//   // a < 2
// }

// array of arrays
// const obj = {
//   name: 'Bobby',
//   age: 15,
//   innerObjects: [
//     {
//       name: 'obj1',
//     },
//     {
//       name: 'obj2',
//     },
//     {
//       name: 'obj3',
//     },
//   ],
// };

// const entries = Object.entries(obj);
// console.log(entries);

// for (const entry of entries) {
//   for (const value of entry) {
//     if (typeof value === 'object') {
//       console.log(value);
//     }
//   }
// }

const objects = [
  {
    name: 'obj1',
  },
  {
    name: 'obj2',
  },
  {
    name: 'obj3',
  },
];

for (const obj of objects) {
  console.log(obj.name);
}
