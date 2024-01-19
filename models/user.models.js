const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  photo: String,
  email: String
})

module.exports = mongoose.model('Users', userSchema)