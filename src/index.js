import toastr from 'toastr';
import { addTodo, deleteTodo, toggleTodo, fetchTodos } from './todosApi';
import todoItemTemplate from './todoItem.hbs';
import 'toastr/build/toastr.min.css';
import './styles.scss';

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-bottom-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

let todos = [];

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

  fetchTodos()
    .then(data => {
      todos = data;
    })
    .then(renderList)
    .then(() => toastr.success('Todo loaded successfully!'))
    .catch(error => toastr.error(error))
    .finally(() => {
      hideLoader();
      showList();
      enableForm();
    });
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

  addTodo(text)
    .then(todo => todos.push(todo))
    .then(() => {
      target.value = '';
    })
    .then(renderList)
    .then(() => toastr.success('Todo added successfully!'))
    .catch(error => toastr.error(error))
    .finally(enableForm);
};

/**
 * Delete todo from the list and from the server
 * @param {number} id
 */
const handleDeleteTodo = id => {
  deleteTodo(id)
    .then(() => {
      todos = todos.filter(todo => todo.id !== id);
    })
    .then(renderList)
    .then(() => toastr.success('Todo deleted successfully!'));
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
      toggleTodo(id);
      break;

    default:
      break;
  }
};

// ===== event listeners =====
refs.inputForm.addEventListener('submit', handleSubmit);
refs.todoList.addEventListener('click', handleTodoClick);

// ===== run =====
loadTodos();
