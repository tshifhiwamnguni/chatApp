const express = require("express");
const app = express();
const Model = require("../models/user.model");


module.exports.login = async (req, res) => {

    const { name, password } = req.body;

    const data = new Model({
        name: name,
        password: password
    })
    // console.log(data);

    try{
        const data = await Model.findOne({name: name, password: password});
    
           res.status(200).json(data) 
    

        
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

};
