// ============== Promise ==============

// const fn1 = res => {
//   console.log('result:', res);

//   return 'trololo';
// };

// const fn2 = text => {
//   console.log(text);
//   console.log('next then');

//   return {
//     text,
//     id: 5,
//   };
// };

// const fn3 = obj => {
//   console.log(obj);
// };

// const errorHandler = () => console.log('My awesome error');

// fetch('http://localhost:3000/users')
//   .then(data => data.json())
//   .then(fn1)
//   .then(fn2)
//   .then(fn3)
//   .catch(errorHandler)
//   .finally(() => {});

// const loader = document.querySelector('#loader');

// console.log('start...');

// loader.classList.add('show');
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('from timer...');

//     // reject();
//     resolve();
//   }, 1000);
// });

// promise
//   .then(() => {
//     console.log('SUCCESS after timer');
//   })
//   .catch(() => {
//     console.log('My ERROR!!!');
//   })
//   .finally(() => {
//     loader.classList.remove('show');
//   });

// console.log('end...');

// ============== callback hell ==============
// const fn1 = () => {
//   console.log('fn 1');
// };

// const fn2 = callback => {
//   console.log('fn 2');

//   callback();
// };

// const fn3 = callback => {
//   console.log('fn 3');

//   callback();
// };

// fn3(() => fn2(() => fn1()));

// ============== callback hell ==============
// const fn1 = () => {
//   console.log('fn 1');

//   return Promise.resolve();
// };

// const fn2 = () => {
//   console.log('fn 2');

//   return Promise.resolve();
// };

// const fn3 = () => {
//   console.log('fn 3');
// };

// const fn3 = new Promise(resolve => {
//   console.log('fn 3');

//   resolve();
// });

// const fn3 = () => {
//   console.log('fn 3');

//   return Promise.resolve();
// };

// fn3() // async
//   .then(fn2)
//   .then(fn1);

// ============== Promise.all ==============
// const fn1 = fetch('http://localhost:3000/users').then(res => res.json());
// .then(data => data.json())
// .then(() => console.log('fetch 1 ready'));

// const fn2 = fetch(`http://localhost:3000/accounts?userId=1`).then(res =>
//   res.json(),
// );
// .then(() => {
//   throw new Error('wertyui');
// });
// .then(data => data.json())
// .then(console.log)
// .then(() => console.log('fetch 2 ready'))
// .then(() => {
//   console.log('All promises finished');
// });

// Promise.all([fn1, fn2])
//   .then(data => {
//     console.log(data);
//   })
//   .then(() => {
//     console.log('All promises finished');
//   })
//   .catch(() => {
//     console.log('ERROR happened');
//   });

// Promise.allSettled([fn1, fn2])
//   .then(data => {
//     console.log(data);
//   })
//   .then(() => {
//     console.log('All promises finished');
//   })
//   .catch(() => {
//     console.log('ERROR happened');
//   });

// Promise.race([fn1, fn2])
//   .then(data => {
//     console.log(data);
//   })
//   .then(() => {
//     console.log('All promises finished');
//   })
//   .catch(() => {
//     console.log('ERROR happened');
//   });

// ============== excercise ==============
// eslint-disable-next-line
// for (var i = 0; i < 10; i += 1) {
//   setTimeout(
//     // (function() {
//     //   const x = i;
//     //   return function() {
//     //     console.log(x);
//     //   };
//     // })(),
//     function(i) {
//       console.log(i);
//     },
//     2000,
//     i,
//   );
// }

// (function fn() {
//   console.log('hello');
// })();

// ============== :) ==============
// eslint-disable-next-line
// for (var i = 0; i < 1; i += 1) {
// setTimeout(() => {
//   for (let i = 0; i < 10; i += 1) {
//     console.log(i);
//   }
// }, 1000);
// }
