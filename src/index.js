import { uuid } from 'uuidv4';
import './styles.css';

import dog from './images/dog.jpeg';

console.log(uuid());

// ======== functions ========
const sayHello = () => {
  console.log('Hello');
};

const sum = (a, b) => {
  console.log(a + b);
};

// ======== run ========
sayHello();
sum(20, 9);

const img = document.querySelector('img');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  img.src = dog;
});
