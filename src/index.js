// const bobby = {
//   name: 'Bobby',
//   age: 15,

//   walk() {
//     console.log(`${this.name} is walking`);
//   },
// };

// const peter = {
//   name: 'Peter',
//   age: 20,

//   walk() {
//     console.log(`${this.name} is walking`);
//   },
// };

// bobby.walk();
// peter.walk();

// function fn() {
//   console.log('Hello');
// }

// fn(); // [[ Call ]]

// constructor
// [[ Call ]]
// [[ Construct ]]
// function Human(name, age) {
//   this.name = name;
//   this.age = age;

//   this.walk = function() {
//     console.log(`${this.name} is walking`);
//   };
// }

// const bobby = new Human('Bobby', 15);
// console.log(bobby);
// bobby.walk();

// const peter = new Human('Peter', 20);
// console.log(peter);
// peter.walk();

// exmaple
// function Phone(model, accumulator) {
//   this.model = model;
//   this.accumulator = accumulator;
//   this.isOn = false;

//   this.turnOn = function() {
//     this.isOn = true;
//   };

//   this.turnOff = function() {
//     this.isOn = false;
//   };

//   this.getModel = function() {
//     return this.model;
//   };
// }

// const nokia = new Phone('Nokia 3310', 600);
// console.log(nokia);

// nokia.turnOn();
// console.log(nokia);

// const siemens = new Phone('Siemens C55', 500);
// console.log(siemens);
// console.log(siemens.getModel());

// exmaple
// function Seller(name) {
//   this.name = name;
// }

// const cards = {
//   items: [],

//   createCard(userName, phone) {
//     this.items.push({
//       id: this.items.length,
//       userName,
//       phone,
//     });
//   },
// };

// const seller1 = new Seller('Margo'); // єкземпляр класса, seller1
// const seller2 = new Seller('Ingrid');

// cards.createCard(seller1.name, '555-342');
// cards.createCard(seller1.name, '555-111');
// cards.createCard(seller2.name, '555-098');

// console.log(cards);

// exmaple
// function Auto(model) {
//   this.model = model;
//   this.speed = 0; // incapsulation

//   this.accelerate = function(speed) {
//     if (speed > 140) {
//       this.speed = 140;
//     } else {
//       this.speed = speed;
//     }
//   };

//   this.break = function(speed) {
//     if (speed < 0) {
//       this.speed = 0;
//     } else {
//       this.speed = speed;
//     }
//   };

//   this.showSpeed = function() {
//     console.log(this.speed);
//   };
// }

// const auto1 = new Auto('Red Kopeyka');

// auto1.accelerate(50);
// auto1.showSpeed();

// auto1.break(-50);
// auto1.showSpeed();

// inheritance
// class Anymal {
//   // this.legs = 4
// }

// class Cat extends Anymal {
//   // this.legs
// }

// class Dog extends Anymal {
//   // this.legs
//   // this.bark = function() {
//   //   console.log('bark');
//   // }
// }

// class Collie extends Dog {
//   // this.legs
//   // this.bark = function() {
//   //   console.log('bark-bark');
//   // }
// }

// class Spaniel extends Dog {
//   // this.legs
//   // this.bark = function() {
//   //   console.log('bark-bark-bark');
//   // }
// }

// exmaple, polymorphysm
// function sum(a, b, c = 0) {
//   return Number(a) + Number(b) + Number(c);
// }

// console.log(sum(1, 1)); // c = 0
// console.log(sum(1, 1, 1));
// console.log(sum('2', '2'));

// exmaple, array
//           0  1  2
// const arr = [1, 2, 2, 3, 2, 2, 2, 2, 3, 3, 3, 3];
// const isUniq = (element, index, arr) => arr.indexOf(element) === index;

// function filter(arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       // 0 === 0
//       // 1 === 1
//       // 1 === 2 // false
//     }
//   }
// }

// console.log(arr.filter(isUniq));
