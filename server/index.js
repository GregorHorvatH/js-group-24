const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const users = ['Bobby', 'Chris'];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('jksdhfgsjhgs jsghjskgf about!');
});

// ======== users ========
app.get('/users', (req, res) => {
  // users.pop();

  res.json(users);
});

app.post('/users', (req, res) => {
  users.push(req.body.name);
  res.json(users);
});

app.get('/google', (req, res) => {
  res.send(`
  <h2>Google web site</h2>
  <p>lorem ipsum</p>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
