// closures

// example 1
/// Record: {x: 10}
// function createCount(x = 0) {
//   // let x = y;

//   return function() {
//     console.log((x += 1));
//   };
// }

// const count = createCount();
// count(); // 1
// count(); // 2
// count(); // 3
// count(); // 4

// // const count2 = createCount();
// // count2(); // 1
// // count2(); // 2

// const count3 = createCount(10);
// count3(); // 1
// count3(); // 2

// const count4 = createCount(42);
// count4(); // 1
// count4(); // 2

// example 2
// function createCounter(x = 0) {
//   return function() {
//     return (x += 1);
//   };
// }

// const counter = createCounter(5); // return function() {
// //                                     ...
// //                                   };

// console.log(counter);

// console.log(counter()); // return (x += 1)
// console.log(counter()); // return (x += 1)

// example 3
// function createCounter(x = 0) {
//   function increment() {
//     return (x += 1);
//   }
//   function decrement() {
//     return (x -= 1);
//   }

//   return {
//     increment,
//     decrement,
//   };
// }

// const counter = createCounter(100);

// console.log(counter.increment);

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());

// console.log(counter.decrement());
// console.log(counter.decrement());
// console.log(counter.decrement());
// console.log(counter.decrement());

// exmaple 4, array
// function createCounter(x = 0) {
//   function increment() {
//     return (x += 1);
//   }
//   function decrement() {
//     return (x -= 1);
//   }

//   return [increment, decrement];
// }

// const counter = createCounter(100);

// console.log(counter[0]()); // increment
// console.log(counter[0]()); // increment
// console.log(counter[0]()); // ...

// console.log(counter[1]()); // decrement
// console.log(counter[1]()); // decrement

// this, call, apply
// function sayHello(years = -1, x) {
//   console.log(
//     `Hello, my name is ${this.name} and I'm ${years} years old. ${x}`,
//   );
// }

// const bobby = {
//   name: 'Bobby',
// };

// const peter = {
//   name: 'Peter',
// };

// const chris = {
//   name: 'Chris',
// };

// // bobby.sayHello();
// // peter.sayHello();

// sayHello.call(bobby, 15, 4); // bobby.sayHello(15)
// sayHello.call(peter, 20, 6); // peter.sayHello()
// sayHello.call(chris, 30, 8); // chris.sayHello()

// sayHello.apply(bobby, [35, 10]); // bobby.sayHello()

// const fn = bobby.sayHello;
// fn();

// this, bind
// function sayHello(years = -1, x) {
//   console.log(
//     `Hello, my name is ${this.name} and I'm ${years} years old. ${x}`,
//   );
// }

// const bobby = {
//   name: 'Bobby',
// };

// const fn = sayHello.bind(bobby);

// // console.dir(fn);

// setTimeout(fn, 2000);

// this, arrow functions
// class Human {
//   constructor(newName) {
//     this.name = newName;
//   }

//   sayHello() {
//     console.log(this);
//   }

//   sayBye = () => console.log('Bye');
// }

// const bobby = new Human('Bobby');
// const peter = new Human('Peter');

// console.log(bobby);
// console.log(peter);

// bobby.sayHello();
// const fn = bobby.sayHello;
// fn();

// bobby.sayBye();
// const fn2 = bobby.sayBye;
// fn2();

// exmaple, call, aplly, NO bind!!!!
function myBind(ctx, callback) {
  return function bindedFunction() {
    callback.call(ctx);
  };
}

const obj = {
  name: 'Bobby',

  sayHello() {
    console.log(this);
  },
};

// const fn = obj.sayHello.bind(obj);
const fn = myBind(obj, obj.sayHello); // function () { ... };
// fn();
// console.dir(fn);
fn();
