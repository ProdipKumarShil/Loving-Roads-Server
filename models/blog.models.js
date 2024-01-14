const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  name: String,
  price: Number,
})

module.exports = mongoose.model('Product', blogSchema)
