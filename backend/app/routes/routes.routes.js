const express = require("express");
const app = express();
const postController = require('../controllers/post.controllers')
const auth =require('../controllers/auth.controller')


/// auth
app.post('/login', auth.login)
app.post('/register', auth.register)


//messsages
app.post('/post', postController.postMessage)
app.get('/allMessages',postController.getAllMessages)


module.exports =  app