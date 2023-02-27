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



io.on('connection', (socket) => {
    console.log('New client connected 2 ' + socket.id);
  
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  
    socket.on('message', (data) => {
      console.log('Received message:', data);
      io.emit('message', data);
    });
  });
  
  const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
