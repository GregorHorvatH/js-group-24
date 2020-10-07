// Распыление аргументов
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];

// console.log(arr1);
// console.log(arr2);

// arr1[2] = 456;
// console.log(arr1);
// console.log(arr2);

// // obj
// const obj1 = { name: 'Bobby', age: 15 };
// const obj2 = { ...obj1 };
// console.log(obj1);
// console.log(obj2);

// obj1.age = 30;
// console.log(obj1);
// console.log(obj2);

// min, max
// const numbers = [2, 1, 5, 3, 4];
// const min = Math.min(...numbers); // 2, 1, 5, 3, 4 = 1
// const max = Math.max(...numbers); // 2, 1, 5, 3, 4 = 5

// console.log('min:', min);
// console.log('max:', max);

// Распыление массивов
// const arr0 = [10, 11, 12];
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1, 6, 7, 8, 9, ...arr0];

// console.log(arr1);
// console.log(arr2);

// Распыление объектов
// const obj0 = { legs: 2 };
// const obj1 = { name: 'Bobby', age: 15 };
// const obj2 = { ...obj1, eyes: 'brown', age: 30, ...obj0 };

// console.log(obj1);
// console.log(obj2);

// Операция rest
// function fn1(a, b, ...rest) {
//   console.log('a + b =', a + b);

//   console.log(rest);
// }

// fn1(1, 1); // 2
// fn1(1, 1, 2, 3, 4, 5, 6, 7, 8);

// Деструктуризация объектов
// const obj1 = { name: 'Bobby', age: 15 };
// const obj2 = { name: 'Chappy', dogAge: 2 };
// const obj3 = { name: 'Whiskas' };

// function sayHello(human = {}, pet = {}) {
//   const { age = 0, name = 'Anonymous' } = human;
//   const { name: petName = 'Anonymous' } = pet;

//   console.log(`Hello my name is ${name}, I'm ${age} years old`);
//   console.log(`My best friend is ${petName}.`);
// }

// sayHello(obj1, obj2);
// sayHello();

// Деструктуризация массивов
// const arr = [3, 2, 1];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [a, b, c] = arr;

// console.log(a, b, c);

// exmaple
// const arr = [3, 2];
// console.log(arr);

// const a = arr[0]; // 3
// const b = arr[1]; // 2

// arr[0] = b; // 2
// arr[1] = a; // 3
// console.log(arr);

// over destruction
// const arr = [3, 2];
// console.log(arr);

// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log(arr);

// exmaple
// let a = 1;
// let b = 2;
// console.log(a, b); // 1, 2

// [a, b] = [b, a];
// console.log(a, b); // 2, 1
// const arr = [a, b];
// console.log(arr);

// let x;
// let y;
// [x, y] = arr;
// console.log(x, y);

// exmaple, sort
// const arr = [2, 1, 5, 3, 4];
// console.log(arr);

// for (let i = 0; i < arr.length; i += 1) {
//   for (let j = i + 1; j < arr.length; j += 1) {
//     if (arr[j] < arr[i]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
// }

// console.log(arr);

// exmaple
const types = {
  ADD: 'added item',
  MARK: 'marked item',
};

const scheduler = {
  items: [],
  log: [],

  logAction(type, id) {
    this.log.push({ id, type });
  },

  addItem(text) {
    this.logAction(types.ADD, this.items.length);

    this.items.push({
      id: this.items.length,
      isDone: false,
      text,
    });
  },

  markDone(id) {
    this.logAction(types.MARK, id);

    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].id === id) {
        this.items[i].isDone = true;

        break;
      }
    }
  },
};

scheduler.addItem('Buy bread'); // [] = 0
scheduler.addItem('Buy potato'); // ['Buy bread'] = 1

scheduler.markDone(1);
console.log(scheduler);

// const human = {
//   name: 'Bobby',
//   walk() {
//     console.log('Im walking');
//   },
// };

// human.walk();

// question 1
const arr1 = [2, 4, 1, 3];
const arr2 = [7, 6, 5, 8];
const arr3 = [10, 9, 12, 11];
const arr4 = [...arr1, ...arr2, ...arr3].sort((a, b) => b - a);

console.log(arr4);
