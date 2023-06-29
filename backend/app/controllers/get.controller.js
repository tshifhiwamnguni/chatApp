const express = require("express");
const app = express();
const userModel = require("../models/user.model");
const { ObjectId } = require("mongodb");

module.exports.getFriends = async (req, res) => {
const {_id} = req.body;
    try {
        const query = { _id: { $ne: new  ObjectId(`${_id}`) } };
        const results = await userModel.find(query)
        res.status(200).json(results)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }

};
