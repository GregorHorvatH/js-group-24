// Math.random()        = 0 ... 1
// Math.random() * 100  = 0 ... 0 * 99
// 0 ... 99 + 1         = 1 ... 100
const x = Math.round(Math.random() * 100) + 1;
// console.log(x);

let userNumber;

do {
  const userInput = prompt('enter number');
  userNumber = Number(userInput);

  if (x < userNumber) {
    console.log('<', userNumber);
  }

  if (x > userNumber) {
    console.log('>', userNumber);
  }
} while (userNumber !== x);

console.log('Win!');
