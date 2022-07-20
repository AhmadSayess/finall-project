const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const projectsSchema = new Schema({
    
 name :{
    type :String,
    required : true
 },
 
}, { timestamps :true})

const projects = mongoose.model('projects', projectsSchema)
module.exports = projects
