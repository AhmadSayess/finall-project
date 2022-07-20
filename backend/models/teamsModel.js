const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const teamsSchema = new Schema({
    
 name :{
    type :String,
    required : true
 },
 projects: {
   type: Schema.Types.ObjectId,
   ref: "projects",
   required: true
}

}, { timestamps :true})

const teams = mongoose.model('teams', teamsSchema)
module.exports = teams
