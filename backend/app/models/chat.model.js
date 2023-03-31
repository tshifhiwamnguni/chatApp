const mongoose = require('mongoose');
// this will house all the chats
const dataSchema = new mongoose.Schema({
    chatID: {
        required: true,
        type: String
    },
    sender: {
        required: true,
        type: String
    },
    reciever: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    },
    
})

module.exports = mongoose.model('chats', dataSchema)