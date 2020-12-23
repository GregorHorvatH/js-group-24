import toastr from 'toastr';
// import { addTodo, deleteTodo, toggleTodo, fetchTodos } from './todosApi';
import { getTodos, addTodo, deleteTodo } from './api';
import todoItemTemplate from './todoItem.hbs';
import options from './toastr.options';

import 'toastr/build/toastr.min.css';
import './styles.scss';

let todos = [];
toastr.options = options;

// ===== refs =====
const refs = {
  inputForm: document.querySelector('.input-form'),
  todoList: document.querySelector('.todo-list'),
  loader: document.querySelector('.loader'),
};

// ===== functions =====
/**
 * Render the todo list to DOM
 */
const renderList = () => {
  refs.todoList.innerHTML = '';
  refs.todoList.insertAdjacentHTML(
    'beforeend',
    todos.map(todoItemTemplate).join(''),
  );
};

/**
 * Show loader
 */
const showLoader = () => {
  refs.loader.classList.add('show');
};

/**
 * Hide loader
 */
const hideLoader = () => {
  refs.loader.classList.remove('show');
};

/**
 * Show the todo List
 */
const showList = () => {
  refs.todoList.classList.add('show');
};

/**
 * Hide the todo List
 */
const hideList = () => {
  refs.todoList.classList.remove('show');
};

/**
 * Disable the input form
 */
const disableForm = () => {
  refs.inputForm.querySelector('.input').setAttribute('disabled', true);
  refs.inputForm.querySelector('.button').setAttribute('disabled', true);
};

/**
 * Enable the input form
 */
const enableForm = () => {
  refs.inputForm.querySelector('.input').removeAttribute('disabled');
  refs.inputForm.querySelector('.button').removeAttribute('disabled');
};

/**
 * Fetch todos from the server and load them to the DOM
 */
const loadTodos = () => {
  disableForm();
  hideList();
  showLoader();

  getTodos()
    .then(data => {
      todos = data;
      renderList();
    })
    .then(() => toastr.success('Todo loaded successfully!'))
    .catch(error => toastr.error(error.messaage))
    .finally(() => {
      hideLoader();
      showList();
      enableForm();
    });

  // fetchTodos()
  //   .then(data => {
  //     todos = data;
  //   })
  //   .then(renderList)
  //   .then(() => toastr.success('Todo loaded successfully!'))
  //   .catch(error => toastr.error(error))
  //   .finally(() => {
  //     hideLoader();
  //     showList();
  //     enableForm();
  //   });
};

/**
 * Add new todo to the list and save to the server
 * @param {object} event
 */
const handleSubmit = e => {
  const target = e.target.elements.text;
  const text = target.value;

  e.preventDefault();

  if (!text) {
    return;
  }

  disableForm();

  const newTodo = {
    text: text,
    isDone: false,
  };

  addTodo(newTodo)
    .then(todo => todos.push(todo))
    .then(() => {
      target.value = '';
    })
    .then(renderList)
    .then(() => toastr.success('Todo added successfully!'))
    .catch(error => toastr.error(error.message))
    .finally(enableForm);

  // addTodo(text)
  //   .then(todo => todos.push(todo))
  //   .then(() => {
  //     target.value = '';
  //   })
  //   .then(renderList)
  //   .then(() => toastr.success('Todo added successfully!'))
  //   .catch(error => toastr.error(error))
  //   .finally(enableForm);
};

/**
 * Delete todo from the list and from the server
 * @param {number} id
 */
const handleDeleteTodo = id => {
  showLoader();

  deleteTodo(id)
    .then(() => {
      todos = todos.filter(todo => todo.id !== id);
      renderList();
    })
    .then(() => toastr.success('Todo deleted successfully!'))
    .catch(error => toastr.error(error.message))
    .finally(() => {
      hideLoader();
    });
};

const handleToggleTodo = id => {
  todos = todos.map(todo => {
    return todo.id === id
      ? {
          ...todo,
          isDone: !todo.isDone,
        }
      : todo;
  });

  // toggleTodo(id);
  renderList();
};

/**
 * Select action (delete or toggle) when user click on todo item button or checkbox
 * @param {object} event
 */
const handleTodoClick = e => {
  if (e.target === e.currentTarget) {
    return;
  }

  const parent = e.target.closest('.todo-item');
  const { id } = parent.dataset;

  switch (e.target.nodeName) {
    case 'BUTTON':
      handleDeleteTodo(Number(id));
      break;

    case 'INPUT':
      handleToggleTodo(Number(id));
      break;

    default:
      break;
  }
};

// ===== event listeners =====
refs.inputForm.addEventListener('submit', handleSubmit);
refs.todoList.addEventListener('click', handleTodoClick);

// ===== start =====
loadTodos();
