const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const messagesSchema = new Schema({
    
 name :{
    type :String,
    required : true
 },
 phone :{
    type :String,
    required : true
 },
 email :{
    type :String,
    required : true
 },
 messages :{
    type :String,
    required : true
 }

}, { timestamps :true})

const messages = mongoose.model('messages', messagesSchema)
module.exports = messages
