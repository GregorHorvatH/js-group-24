// ========== handlebars ==========
// const handlebars = ({ isOneLanguage }) => {
//   if (isOneLanguage) {
//     // ... v.1
//   } else {
//     // ... v.2
//   }
// };

// const obj = {
//   languages: [],
//   isOneLanguage: languages.length === 1, // true / false
// };

// handlebars(obj);

// ========== catch ==========
// const myFetch = x => {
//   return Promise.finally('sdfsfs');
//   // try {
//   //   if (x > 4) {
//   //     throw new Error('Boooom!');
//   //   }
//   // } catch (error) {
//   //   return Promise.reject(error);
//   // }

//   // return Promise.resolve('done');
// };

// myFetch(5)
//   .then(res => console.log('res:', res))
//   .catch(error => console.log('error happened:', error))
//   .finally(() => console.log('🎠'));

// ========== fetch ==========
// const obj = {
//   name: 'Bobby',
//   age: 15,
// };

// fetch('https://my-backend', {
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(obj),
// });

// ========== import ==========
// var pagination = require('pagination');
// import pagination from 'pagination';

// ========== import ==========
// .then((data) => {
//   const { token, user } = data;

//   refs.name.textContent = user.name;
//   refs.email.textContent = user.email;

//   setToken(token);

//   return data;
// }
