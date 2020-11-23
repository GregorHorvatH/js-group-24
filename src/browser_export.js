// ====== v1, v2 ======
export function sayHello() {
  console.log('Hello');
}

export function sayBye() {
  console.log('Bye');
}

// ====== v3 ======
// function sayHello() {
//   console.log('Hello');
// }

// function sayBye() {
//   console.log('Bye');
// }

// export default {
//   sayHello,
//   sayBye,
// };

// ====== v4 ======
export default function () {
  console.log('Hello from default export');
}
