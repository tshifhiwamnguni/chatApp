const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
//the fieldsnof the table 
    name: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
})  
//user in this case its the table in the database
module.exports = mongoose.model('users', dataSchema)