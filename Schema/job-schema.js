const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
  Role: {
    type : String,
    required : [true, "name is required for applicants to know before they apply"],
    trim : true
  },
  Type: {
    type : String,
    enum : ["FullTime","Contract","InternShip","PartTime"],
    default : FullTime
  },
  Experience: {
    type : Number,
    required : [true, "Mention number of years of experience needed"]
  },
  Level: {
    type : String,
    enum : ["Intern","Entry-level","Mid-senior","Senior"],
    required : [true, "Experience level is needed"]
  },
  PostedAt : {
    type : Date,
    default : Date.now
  }

})
module.exports = mongoose.model('jobs',JobSchema)