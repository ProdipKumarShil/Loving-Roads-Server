const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  body: [],
  category: String,
  reacts: Number,
  views: Number,
  date: Date,
  img: Object,
  author: {
    name: String,
    img: String
  }
})



module.exports = mongoose.model('Blog', blogSchema, "blogs")
