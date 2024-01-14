const express = require('express');
const Blog = require('../models/blog.models');
const router = express.Router()

router.get('/getBlogs', (req, res) => {
  res.send({blog: 'all blogs'})
})

router.post('/postBlog', async(req, res) => {
  try {
    const blogData = req.body
    const blog = new Blog(blogData)
    await blog.save()
    res.status(210).send({status: true, message: "Data Inserted Successful"})
  } catch (error) {
    res.status(500).send({status: false, message: "Data Inserted Failed"})
  }
})

module.exports = router
