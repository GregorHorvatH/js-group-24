import { fn1, fn2 } from './utils.js';

fn1();
fn2();

const img = document.querySelector('.section[data-id="section-5"] img');

const { url, username } = img.dataset;
img.src = url;

console.log(url);
console.log(username);

img.dataset.username = 'Bobby';
