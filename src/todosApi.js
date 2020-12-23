import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 1000;

// export const fetchTodos = () =>
//   fetch('http://localhost:3000/todos').then(res => res.json());

export const fetchTodos = () => axios.get('/todos').then(({ data }) => data);

// export const addTodo = text =>
//   fetch('http://localhost:3000/todos', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       text,
//       isDone: false,
//     }),
//   })
//     .then(res => res.json())
//     .then(console.log);

export const addTodo = text =>
  axios
    .post('/todos', {
      text,
      isDone: false,
    })
    .then(({ data }) => data);

export const deleteTodo = id => axios.delete(`/todos/${id}`).then(() => id);

export const toggleTodo = id => {
  console.log('toggle item:', id);

  return Promise.resolve();
};
