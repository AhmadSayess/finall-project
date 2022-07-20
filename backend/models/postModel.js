const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const postSchema = new Schema({
    
 title :{
    type :String,
    required : true
 },
 description :{
    type :String,
    required : true
 },
 image :{
    type :Array,
    required : true
 },
 category: {
   type: Schema.Types.ObjectId,
   ref: "category",
   required: true
}

} , { timestamps :true})

const post = mongoose.model('post', postSchema)
module.exports = post
