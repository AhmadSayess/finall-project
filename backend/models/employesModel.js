const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const employesSchema = new Schema({
 name :{
    type :String,
    required : true
 },
 email :{
    type :String,
    required : true
 },
 phone :{
    type :String,
    required : true
 },
 address :{
    type :String,
    required : true
 },
 role :{
    type :String,
    required : true
 },
 teams: {
   type: Schema.Types.ObjectId,
   ref: "teams",
   required: true
}

}, { timestamps :true})

const employes = mongoose.model('employes', employesSchema)
module.exports = employes
