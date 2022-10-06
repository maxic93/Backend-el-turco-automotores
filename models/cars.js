const { Schema, model } = require("mongoose")

const carSchema = new Schema ({
    name: String,
    img: Array,
    price: String,
    km: String,
    year: Number
})

const Car = new model ("Cars", carSchema)

module.exports = Car