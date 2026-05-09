var mongoose = require("mongoose");
//create schema for validation
var leadSchema = mongoose.Schema({
  name: String,
  phone: Number,
  course: String,
  timeStamp: Date,
  isOffline: Boolean,
});

var LeadModel = mongoose.model("lead", leadSchema);

module.exports = LeadModel;

//create model for refering collection in the DB
