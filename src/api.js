// ======== fetch ========
// const URL = 'http://localhost:3000';

// export const getTodos = () => fetch(`${URL}/todos`).then(res => res.json());

// export const addTodo = newTodo =>
//   fetch(`${URL}/todos`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newTodo),
//   }).then(res => res.json());

// export const deleteTodo = id =>
//   fetch(`${URL}/todos/${id}`, {
//     method: 'DELETE',
//   });

// ======== axios ========
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';

// export const getTodos = () => axios.get('/todos').then(res => res.data);

// export const addTodo = newTodo =>
//   axios.post('/todos', newTodo).then(({ data }) => data);

// export const deleteTodo = id => axios.delete(`/todos/${id}`);

// ======== axios instance ========
import axios from 'axios';

// server 1
const server1 = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { Authorization: 'super-puper-secret-key' },
});

export const getTodos = () => server1.get('/todos').then(res => res.data);

export const addTodo = newTodo =>
  server1.post('/todos', newTodo).then(({ data }) => data);

export const deleteTodo = id => server1.delete(`/todos/${id}`);
