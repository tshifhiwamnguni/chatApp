

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3002;
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
  }});



io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected`);

  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected`);
  });

  socket.on('chat message', (msg) => {
    console.log(`User ${socket.id} sent message: ${msg.message}`);
    io.emit('chat message', msg);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

