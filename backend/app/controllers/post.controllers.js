const express = require("express");
const app = express();
const Model = require("../models/chat.model");


module.exports.postMessage = async (req, res) => {

    const { chatID, sender, reciever, message } = req.body;

    const data = new Model({
        chatID: chatID,
        sender: sender,
        reciever: reciever,
        message: message

    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
        console.log(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }

};


module.exports.getAllMessages = async (req, res) => {
    const  {chatID} = req.body;
console.log(23456);
  console.log('mmm ,;"' , chatID);

    try {
      const data = await Model.find({ chatID: chatID});
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };