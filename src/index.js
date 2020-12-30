// ======== Promise hell ========
// const userName = 'Peter';

// fetch(`http://localhost:3000/users?name=${userName}`)
//   .then(res => res.json())
//   .then(data => {
//     const { id } = data[0];

//     console.log('fetch by id:', id);

//     fetch(`http://localhost:3000/accounts?userId=${id}`)
//       .then(res => res.json())
//       .then(console.log);
//   });

// const fn1 = () => {
//   console.log('fn 1');

//   return Promise.resolve('fn 1');
// };

// const fn2 = () => {
//   console.log('fn 2');

//   return Promise.resolve('fn 2');
// };

// fn1()
//   .then(() => console.log('fn1 finish'))
//   .then(() => {
//     fn2().then(() => console.log('fn2 finish'));
//   });

// ======== async/await ========
// const getUserAccountByUserName = async userName => {
//   const user = await fetch(
//     `http://localhost:3000/users?name=${userName}`,
//   ).then(res => res.json());

// const accounts = await fetch(
//   `http://localhost:3000/accounts?userId=${user[0].id}`,
// ).then(res => res.json());

//   console.log(accounts);
// }

// getUserAccountByUserName('Peter');
// getUserAccountByUserName('Bobby');

// ======== async/await ========
// const fn1 = () => {
//   console.log('fn 1');

//   // throw new Error('Boooooom');

//   return Promise.resolve('fn 1');
// };

// const fn2 = () => {
//   console.log('fn 2');

//   throw new Error('tro-lo-lo');

//   // return Promise.resolve('fn 2');
// };

// const fns = async () => {
//   try {
//     await fn1().then(() => console.log('fn1 finish'));
//     await fn2().then(() => console.log('fn2 finish'));
//   } catch (error) {
//     console.log('MY ERROR HAPPENED!!!');
//   }
// };

// fns();

// ========== iterator ==========
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(...arr);

// // eslint-disable-next-line
// for (const item of arr) {
//   console.log(item);
// }

// const obj = {
//   from: 1,
//   to: 3,

//   [Symbol.iterator]() {
//     let current = this.from;
//     const last = this.to;

//     return {
//       next() {
//         if (current <= last) {
//           return {
//             value: current++, // eslint-disable-line
//             done: false,
//           };
//         }
//         return {
//           done: true,
//         };
//       },
//     };
//   },
// };

// console.log(...obj);
// const range = obj[Symbol.iterator]();

// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());

// // eslint-disable-next-line
// for (const item of obj) {
//   console.log(item);
// }

// ========== generators ==========
// function* fn() {
//   const a = yield 1;
//   yield 2 + a;
// }

// const range = fn();
// const objA = range.next();

// console.log(objA);
// console.log(range.next(objA.value));

// ========== мутабельность/иммутабельность ==========
// const x = 1; // immutable

// // mutable
// let y = 2;
// y = 3;

// // immutable
// const obj1 = Object.freeze({ a: 1 });
// obj1.a = 2; // error

// // mutable
// const obj2 = { a: 1 };
// obj2.a = 2; // ok

const fn = () => Promise.resolve(123);

fn().then(console.log);
