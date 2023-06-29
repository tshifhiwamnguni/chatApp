const express = require("express");
const app = express();
const postController = require('../controllers/post.controllers')
const auth =require('../controllers/auth.controller')

const getController = require('../controllers/get.controller')
/// auth
app.post('/login', auth.login)
app.post('/register', auth.register)


//messsages
app.post('/post', postController.postMessage)
app.post('/allMessages',postController.getAllMessages)

//get
app.post('/getFriends',getController.getFriends)


module.exports =  app