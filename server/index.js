const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ======== todos ========
let todos = [
  {
    id: 0,
    text: 'sdfghjykiguyft',
    done: false,
    timestamp: Date.now(),
  },
];

app.post('/todo', (req, res) => {
  const todo = req.body;
  const newTodo = {
    ...todo,
    id: todos.length, // TODO: change id to uuid
    timestamp: Date.now(),
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

app.get('/todo', (req, res) => {
  res.json(todos);
});

app.get('/todo/:id', (req, res) => {
  const { id } = req.params;

  res.json(todos.find(todo => todo.id === Number(id)));
});

app.delete('/todo/:id', (req, res) => {
  const { id } = req.params;

  todos = todos.filter(todo => todo.id !== Number(id));

  res.status(204).json({ message: 'done' });
});

app.patch('/todo/:id', (req, res) => {
  const { id } = req.params;
  const newTodoBody = req.body;

  todos = todos.map(todo =>
    todo.id === Number(id)
      ? {
          ...todo,
          ...newTodoBody,
        }
      : todo,
  );

  res.json(todos.find(todo => todo.id === Number(id)));
});

app.put('/todo/:id', (req, res) => {
  const { id } = req.params;
  const newTodoBody = req.body;

  todos = todos.map(todo => (todo.id === Number(id) ? newTodoBody : todo));

  res.json(todos.find(todo => todo.id === Number(id)));
});

// ======== users ========
// const users = ['Bobby', 'Chris'];

// app.get('/users', (req, res) => {
//   res.json(users);
// });

// app.post('/users', (req, res) => {
//   users.push(req.body.name);
//   res.json(users);
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
