'use strict';

const refs = {
  progress: document.querySelector('.progress'),
  sections: document.querySelector('.sections'),
  sectionList: document.querySelectorAll('.section'),
  input: document.querySelector('#input'),
};

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

// ============
// progressbar
// ============
function debounce(callback, delay) {
  let debounceId;

  return function(e) {
    clearTimeout(debounceId);

    debounceId = setTimeout(() => {
      callback(e);
    }, delay);
  };
}

function throttle(callback, delay) {
  let throttleId;

  return function(e) {
    if (throttleId) {
      return;
    }

    throttleId = setTimeout(() => {
      callback(e);
      throttleId = 0;
    }, delay);
  };
}

function handleScroll(e) {
  refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;

  // console.log('scroll...');
}

refs.sections.addEventListener('scroll', throttle(handleScroll, 300));
// refs.sections.addEventListener('scroll', debounce(handleScroll, 500));
// refs.sections.addEventListener('scroll', _.debounce(handleScroll, 500));
// refs.sections.addEventListener('scroll', _.throttle(handleScroll, 300));

// ============
// input
// ============
// const handleInput = e => {
//   console.log('Search:', e.target.value);
// };

// refs.input.addEventListener('input', _.debounce(handleInput, 400));

// ============
// intersection observer API
// ============
const options = {
  threshold: 0.3, // 20%
};

const onEntry = entries => {
  entries.forEach(entry => {
    const prev = document.querySelector('li.active');
    const currentId = entry.target.dataset.id;
    const currentMenuItem = document.querySelector(
      `li[data-id="${currentId}"]`,
    );

    if (entry.isIntersecting) {
      const img = entry.target.querySelector('img');
      const { url } = img.dataset;

      img.src = url;

      if (prev) {
        prev.classList.remove('active');
      }

      currentMenuItem.classList.add('active');
    }
  });
};

const sectionObserver = new IntersectionObserver(onEntry, options);
refs.sectionList.forEach(section => sectionObserver.observe(section));
