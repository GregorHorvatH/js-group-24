console.log('JS Group 24');

const obj = {
  name: 'Bobby',

  sayHello() {
    console.log(this);

    const innerFn = () => {
      console.log('inner fn:', this);
    };

    innerFn();
  },
};

// obj.sayHello();

const fn = obj.sayHello.bind(obj);

fn();

// fn.call(obj);
// fn.apply(obj);

// ======= navigation =========
const refs = {
  b1: document.querySelector('#button-1'),
  b2: document.querySelector('#button-2'),
  b3: document.querySelector('#button-3'),
  content: document.querySelector('#content'),
};

const template1 = 'page 1 template';
const template2 = 'page 2 template';
const template3 = 'page 3 template';
const notFound = '404 not found';

const pageNumber = window.location.search
  .replace('?', '')
  .split('&')
  .map(item => item.split('='))
  .find(([key]) => key === 'page')[1];

switch (pageNumber) {
  case '1':
    refs.content.textContent = template1;
    break;

  case '2':
    refs.content.textContent = template2;
    break;
  case '3':
    refs.content.textContent = template3;
    break;

  default:
    refs.content.textContent = notFound;
}

const handleClick = e => {
  switch (e.target.id) {
    case 'button-2':
      refs.content.textContent = template2;
      break;
    case 'button-3':
      refs.content.textContent = template3;
      break;

    case 'button-1':
    default:
      refs.content.textContent = template1;
      break;
  }
};

refs.b1.addEventListener('click', handleClick);
refs.b2.addEventListener('click', handleClick);
refs.b3.addEventListener('click', handleClick);
