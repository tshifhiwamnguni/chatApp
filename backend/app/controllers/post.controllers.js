const express = require("express");
const app = express();
const Model = require("../models/user.model");


module.exports.addRequest = async (req, res) => {

    const { name, age } = req.body;
    console.log(name, age);
    const data = new Model({
        name: req.body.name,
        age: req.body.age
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
