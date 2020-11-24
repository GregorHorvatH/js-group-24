const button = document.querySelector('button');

const handleClick = () => {
  console.log(this);
};

button.addEventListener('click', handleClick);
