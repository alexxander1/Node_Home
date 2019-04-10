var mongoose = require('mongoose');
var HackersShema = mongoose.Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true
  },
  avatar: String,
  desc: String,
  created:{
    type: Date,
    default: Date.now()
  }
})

module.exports.Hackers = mongoose.model("Hackers", HackersShema)
