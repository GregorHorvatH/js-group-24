// // ========= querySelector =========
// const title = document.querySelector('h1');

// console.log(title);

// // ========= querySelectorAll =========
// const list = document.querySelectorAll('li');

// list.forEach(item => console.log(item));

// ========= parentNode =========
// const firstLi = document.querySelector('li');

// console.log(firstLi.parentNode);

// ========= parentNode =========
// const list = document.querySelector('ul');

// console.log(list.childNodes);

// ========= attributes =========
// const cat = document.querySelector('img');

// console.log(cat.src);

// cat.src =
//   'https://www.nestle.ua/sites/g/files/pydnoa316/files/asset-library/publishingimages/products/pro_plan_dog.jpg';
// cat.width = 300;
// cat.hidden = true;
// cat.hidden = false;

// ========= createElement =========
// <img
//   src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
//   alt="cat"
//   width="200"
// />

// const body = document.querySelector('body');
// const img = document.createElement('img');

// img.src =
//   'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop';
// // img.style.width = '50%';
// // img.style.borderRadius = '10px';
// img.classList.add('cat');
// // img.className = 'cat red';
// // img.classList.remove('red');

// // console.log(body);
// // console.log(img);

// // img.src =
// //   'https://www.nestle.ua/sites/g/files/pydnoa316/files/asset-library/publishingimages/products/pro_plan_dog.jpg';

// body.appendChild(img);

// ============ append ==========
// <ul id="list">
// <li class="first">1</li>
// <li class="second">2</li>
// <li class="third">3</li>
// </ul>
// const body = document.querySelector('body');
// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');

// // ul.appendChild(li1);
// // ul.appendChild(li2);
// // ul.appendChild(li3);

// const lis = [li1, li2, li3];

// ul.append(...lis);

// body.appendChild(ul);

// // body.removeChild(ul);
// // ul.remove();

// // ============ innerHTML ============
// li1.innerHTML = '<h1>Hello</h1>';
// li2.innerText = '<h1>dfghjs</h1>';
// li3.textContent = '3456789';

// ul.remove();

// ============ insertAdjacentHTML ============
// const list = `
// <ul>
//   <li>123</li>
//   <li>456</li>
// </ul`;

// const body = document.querySelector('body');

// body.insertAdjacentHTML('beforeend', list);

// ============ insertAdjacentHTML ============
// const body = document.querySelector('body');

// function getUserItemMarkup({ name, age }) {
//   return `<li class="user">${name} - ${age}</li>`;
// }

// function getListMarkup(arr) {
//   const list = `
//     <ul>
//       ${arr.map(item => getUserItemMarkup(item)).join('')}
//     </ul`;

//   return list;
// }

// const users = [
//   {
//     name: 'Bobby',
//     age: 15,
//   },
//   {
//     name: 'Peter',
//     age: 20,
//   },
//   {
//     name: 'Chris',
//     age: 25,
//   },
// ];

// body.insertAdjacentHTML('beforeend', getListMarkup(users));

// ============ elem.classList.toggle ============
// const h1 = document.querySelector('h1');

// // setInterval(() => {
// //   h1.classList.toggle('red');
// // }, 1000);

// // h1.hidden = true;

// h1.setAttribute('hidden', true);
// // h1.removeAttribute('hidden');

// console.log(h1.attributes);

// ============ data attributes ============
// const img = document.querySelector('img');

// console.log(img.dataset.full);
// console.log(img.dataset.id);
// console.log(img.dataset.fullName);

// =========== browser navigation ==========
// history.back();
// history.forward();
// location.replace('./page1.html');
