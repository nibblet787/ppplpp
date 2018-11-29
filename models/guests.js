const mongoose = require('mongoose');
const guestSchema = new mongoose.Schema({
  host:{type: Boolean, default: false},
  hostName:{type: String},
  hostDate:{type: Number},
  name:{type: String, required:true},
  food:{type: String, required:true},
  recipeUrl:{type: String},
  profilePic:{type: String, default: 'https://i.imgur.com/jNNT4LE.png'},
  needOven:{type: Boolean, default: false},
  attendees:{type: Number},
  email:{type:String},
  glutenFree:{type: Boolean, required: true, default: false},
  peanutFree:{type: Boolean, required: true, default: false}
});

const Guests = mongoose.model('Guest', guestSchema);

module.exports = Guests;
