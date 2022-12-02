const mongoose = require("mongoose")
const dumbellSchema = mongoose.Schema({
Dumbell_brand: {type: String,required:[true,'Brand cannot be empty']},
Dumbell_material: {type: String,required:[true,'Material cannot be empty']},
Dumbell_weight:{type: Number,required:[true,'Type should be provided']}
})
module.exports = mongoose.model("dumbell",dumbellSchema)