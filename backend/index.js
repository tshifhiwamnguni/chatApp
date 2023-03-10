const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
const server = http.createServer(app);


// require('./socket')(server)
const io = socketIO(server,{
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type']
    }
  });

const corsMethod = {
    origin: 'https://localhost:3000',
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
}
app.use(cors(corsMethod));

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(express.urlencoded({ extended: true }));

const chatRooms = new Map();

// io.on('connection', (socket) => {
//     console.log('New client connected 2 ' + socket.id);

//       // Join a room
//   socket.on('join', (room) => {
//     console.log(`Socket ${socket.id} joining room ${room}`);
//     socket.join(room);
//   });

//   // Leave a room
//   socket.on('leave', (room) => {
//     console.log(`Socket ${socket.id} leaving room ${room}`);
//     socket.leave(room);
//   });
  
//     socket.on('disconnect', () => {
//       console.log('Client disconnected');
//     });
  
//     socket.on('message', (data) => {
//       console.log('Received message:', data);
//       io.to(3).emit('message', data);
//      });
  
//   });
  
io.on("connection", (socket) => {
  console.log("New user connected: ", socket.id);

  socket.on("subscribe", ([user1, user2]) => {
    // create chat room if it doesn't exist
    const roomId = getRoomId(user1, user2);
    if (!chatRooms.has(roomId)) {
      chatRooms.set(roomId, []);
    }

    // join chat room
    socket.join(roomId);

    console.log(`${socket.id} joined room ${roomId}`);
  });

  socket.on("unsubscribe", ([user1, user2]) => {
    // leave chat room
    const roomId = getRoomId(user1, user2);
    socket.leave(roomId);

    console.log(`${socket.id} left room ${roomId}`);
  });

  socket.on("message", (data) => {
    const { sender, receiver, text } = data;
    const roomId = getRoomId(sender, receiver);

    // add message to chat room
    const message = { sender, text };
    chatRooms.get(roomId).push(message);

    // send message to all users in the chat room
    io.to(roomId).emit("message", message);

    console.log(`${sender} sent a message to ${receiver}: ${text}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
  });
});

function getRoomId(user1, user2) {
  return [user1, user2].sort().join("-");
}
  const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
