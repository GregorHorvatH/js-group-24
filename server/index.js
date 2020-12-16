const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

const users = [
  {
    id: 1,
    name: 'Bobby',
  },
  {
    id: 2,
    name: 'Chris',
  },
];
const accounts = [
  {
    userId: 1,
    number: '234567890',
  },
  {
    userId: 2,
    number: '987654',
  },
];

// ======== users ========
app.get('/users', (req, res) => {
  setTimeout(() => {
    res.json(users);
  }, 2000);
});

app.get('/accounts', (req, res) => {
  const { userId } = req.query;

  setTimeout(() => {
    res.json(accounts.filter(account => account.userId === Number(userId)));
  }, 1000);
});

app.post('/users', (req, res) => {
  users.push(req.body.name);
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
