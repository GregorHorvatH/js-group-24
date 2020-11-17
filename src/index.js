const menu = document.querySelector('.js-nav');

const handleMenuClick = e => {
  const current = e.target;
  const prev = document.querySelector('.active');

  if (e.currentTarget === e.target) {
    return;
  }

  // if (e.target.nodeName !== 'A') {
  //   return;
  // }

  if (prev) {
    prev.classList.remove('active');
  }

  current.classList.add('active');
};

menu.addEventListener('click', handleMenuClick);
