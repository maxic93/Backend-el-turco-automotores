const mongoose = require("mongoose")
const Car = require("../models/cars")

 
const readProduct = async(req, res)=> {
    Car.find({}).lean()
    .then(result=> res.send(result))
 }

 module.exports = {
     readProduct
 }