import werstdfh from './file.js';

console.log(werstdfh);

// const ref = {
//   buttonDecrement: document.querySelector('.decrement'),
//   buttonIncrement: document.querySelector('.increment'),
//   htmlValue: document.querySelector('.value'),
// };

// let value = 0;

// function render() {
//   ref.htmlValue.textContent = value;
// }

// function decremenet() {
//   value -= 1;

//   render();
// }

// function incremenet() {
//   value += 1;

//   render();
// }

// console.log('value:', value);
// incremenet();
// incremenet();
// incremenet();
// incremenet();
// console.log('value:', value);

// const buttonIncrement = document.querySelector('.decrement');
// const buttonDecrement = document.querySelector('.increment');
// const htmlValue = document.querySelector('.value');

// ref.buttonDecrement.addEventListener('click', decremenet);
// ref.buttonIncrement.addEventListener('click', incremenet);

// ========= mouse events ===========
// const myButton = document.querySelector('#my-button');

// myButton.addEventListener('mouseup', () => {
//   console.log('mouseup');
// });

// myButton.addEventListener('mousedown', () => {
//   console.log('mousedown');
// });

// myButton.addEventListener('click', event => {
//   console.log('click:', event);
// });

// ========= keyboard events ===========
// const myInput = document.querySelector('#input');

// myInput.addEventListener('keydown', e => {
//   if (e.code === 'Enter') {
//     console.log(e.target.value);
//     e.target.value = '';
//   }
// });

// myInput.addEventListener('keypress', () => {
//   console.log('keypress');
// });

// myInput.addEventListener('keyup', () => {
//   console.log('keyup');
// });

// ===== prevent default =======
// document.querySelector('a').addEventListener('click', e => {
//   e.preventDefault();

//   console.log('click on a');
// });

// ====== remove event listener ====
// window.addEventListener('click', () => {
//   console.log('window click 1');
// });

// window.addEventListener('click', () => {
//   console.log('window click 2');
// });

// const callback = () => {
//   console.log('window click 3');
// };

// window.addEventListener('click', callback);
// window.removeEventListener('click', callback);

// ========= login form ===========
// const form = document.querySelector('form');
// const modal = document.querySelector('.modal-wrapper');
// const modalButton = document.querySelector('.modal button');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const login = e.target.elements.login.value;
//   const password = e.target.elements.password.value;

//   if (login === 'admin' && password === 'admin') {
//     console.log('Hurray!');
//   } else {
//     showModal();
//   }
// });

// modalButton.addEventListener('click', hideModal);

// function handleKeyDown(e) {
//   if (e.code === 'Escape') {
//     hideModal();
//   }
// }

// function showModal() {
//   modal.classList.add('show');
//   window.addEventListener('keydown', handleKeyDown);
// }

// function hideModal() {
//   modal.classList.remove('show');
//   window.removeEventListener('keydown', handleKeyDown);
// }

// ========= focus, blur ===========
// const input = document.querySelector('input');
// input.addEventListener('focus', () => console.log('focus'));
// input.addEventListener('blur', () => console.log('blur'));

// ========= change, input ===========
// const input = document.querySelector('#myInput');
// input.addEventListener('change', e => console.log('change', e));
// input.addEventListener('click', e => console.log('input', e));

// ========= unload =========
// window.addEventListener('unload', () => console.log('unload'));

// ======= current target =======
// const outer = document.querySelector('.yellow');

// function handleOuter(e) {
//   console.log('parent (currentTarget):', e.currentTarget);
//   console.log('child (target):', e.target);
//   console.log('e:', e); // ??? currentTarget = null ???
// }

// outer.addEventListener('click', handleOuter);
