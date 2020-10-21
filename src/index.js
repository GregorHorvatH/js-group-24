// function Human(name) {
//   this.name = name;

//   this.talk = function() {
//     console.log('...');
//   };
// }

// function Doctor() {
//   // this.name = name;
//   // ...

//   this.healing = function() {
//     console.log('..');
//   };
// }

// function Pilot() {
//   // this.name = name;
//   // ...

//   this.fly = function() {
//     console.log('..');
//   };
// }

// const bobby = new Human('Bobby');
// const peter = new Human('Peter');

// console.log(bobby);
// console.log(peter);

// ES6 classes
class Human {
  constructor(name, eyes) {
    this.name = name;
    this.eyes = eyes;
  }

  talk() {
    console.log(`${this.name} is talking`);
  }

  walk() {
    console.log(`${this.name} is walking`);
  }
}

// const bobby = new Human('Bobby');
// const peter = new Human('Peter');

// console.log(bobby);
// console.log(peter);

// bobby.talk();
// peter.walk();

// extends
// class Doctor extends Human {
//   constructor(name, eyes, age) {
//     super(name, eyes);

//     this.age = age;
//   }

//   heal() {
//     console.log(`${this.name} is healing`);
//   }
// }

// const house = new Doctor('dr.House', 'green', 30);
// console.log(house);

// house.talk();
// house.walk();
// house.heal();

// console.log(house);

// ES5, prototypes
// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// console.log(animal);
// console.log(dog);

// Object.create()
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(animal);
// console.log(dog);

// Function.prototype
// function Human(name) {
//   this.name = name;
// }

// Human.prototype.walk = function() {
//   console.log('walk');
// };

// function Doctor(name, age) {
//   Human.call(this, name);
//   this.age = age;

//   this.heal = function() {
//     console.log('heal');
//   };
// }

// Doctor.prototype = Object.create(Human.prototype);
// Doctor.prototype.constructor = Doctor;

// const bobby = new Human('Bobby');
// const peter = new Human('Peter');

// console.log(bobby);
// console.log(peter);

// const house = new Doctor('dr.House', 20);
// house.walk();

// console.log(house);

// // after creating object instance
// Human.prototype.sayhello = function() {
//   console.log('Hello');
// };

// house.sayhello();

// Object.prototype.hasOwnProperty
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog);

// // console.log(Object.keys(dog));

// for (const key in dog) {
//   console.log(key); // barks, eats
//   console.log(dog.hasOwnProperty(key)); // true || false
// }

// Геттеры и сеттеры
// class Auto {
//   constructor() {
//     this._speed = 0;
//   }

//   set speed(value) {
//     if (value > 100) {
//       this._speed = 100;
//     } else {
//       this._speed = value;
//     }
//   }

//   get speed() {
//     return `${this._speed} km/h`;
//   }
// }

// const kopeyka = new Auto();
// kopeyka.speed = 500;

// console.log(kopeyka.speed);

// Приватные свойства и методы
// class Auto {
//   #speed = 0; // Приватные свойства

//   #sayHello() {
//     console.log('Hello');
//   }

//   constructor(initialSpeed) {
//     this.#speed = initialSpeed;
//   }

//   set speed(value) {
//     if (value > 100) {
//       this.#speed = 100;
//     } else {
//       this.#speed = value;
//     }
//   }

//   get speed() {
//     // this.#sayHello();
//     return `${this.#speed} km/h`;
//   }
// }

// const kopeyka = new Auto(10);
// // kopeyka.speed = 500;

// console.log(kopeyka);
// console.log(kopeyka.speed);

// Статические свойства и методы
// class MyMath {
//   constructor() {}

//   static saySomething() {
//     console.log('dfgkjh');
//   }
// }

// MyMath.saySomething();

// const math = new MyMath();
// math.saySomething();

// Math.max();
// Math.min();

// Number.parseFloat('456.5');
// Number.parseInt('456.5');
