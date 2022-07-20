const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const aboutusSchema = new Schema({
    
 title :{
    type :String,
    required : true
 },
 description :{
    type :String,
    required : true
 },
 goals :{
    type :String,
    required : true
 }

}, { timestamps :true})

const aboutus = mongoose.model('aboutus', aboutusSchema)
module.exports = aboutus
