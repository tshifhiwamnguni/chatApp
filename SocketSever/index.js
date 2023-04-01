

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

  socket.on("join",(data)=>{
      socket.join(data)
      console.log("room: " ,data);
  })

  socket.on('chat message', (data) => {
    console.log(`User ${socket.id} sent message: ${data.message} on room: ${data.room}`);
    io.to(data.room).emit('chat message', data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

