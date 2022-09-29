const { Schema, model } = require("mongoose")

const carSchema = new Schema ({
    name: String,
    img: Array,
    price: Number,
    km: Number,
    year: Number
})

const Car = new model ("cars", carSchema)

module.exports = Car