const express = require("express");
const app = express();
const postController = require('../controllers/post.controllers')





app.post('/post', postController.addRequest)


module.exports =  app