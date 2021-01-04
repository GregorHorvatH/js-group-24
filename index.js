const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 5000;

const io = require('socket.io')(http);

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', msg => {
    // console.log('message: ' + JSON.stringify(msg));
    io.emit('chat message', msg);
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
