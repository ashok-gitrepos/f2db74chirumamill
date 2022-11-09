const mongoose = require("mongoose")
const dumbellSchema = mongoose.Schema({
Dumbell_brand: String,
Dumbell_material: String,
Dumbell_weight: Number
})
module.exports = mongoose.model("dumbell",
dumbellSchema)