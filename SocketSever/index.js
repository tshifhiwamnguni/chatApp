
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
//cors options
const corsMethod = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
};

//socket
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(corsMethod);

app.use(cors)
//socket initialize 
io.on('connection', (socket) => {
    console.log("socekt ,", socket.id);

    socket.on('disconnect',()=>{
        console.log('disconnected at ', socket.id);
    })
});

//run sever
const port = process.env.PORT || 3002;
server.listen(port, () => {
  console.log(`socket server listening on port ${port}`);
});
