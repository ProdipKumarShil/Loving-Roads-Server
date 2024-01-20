const express = require('express');
const Blog = require('../models/blog.models');
const router = express.Router()

router.get('/getBlogs', async(req, res) => {
  try{
    const blogs = await Blog.find()
    res.status(200).send({count: blogs.length, blogs: blogs})
  }
  catch{
    res.status(500).send({status: false, message: "Failed to get blogs"})
  }
})

router.get('/singleBlog/:id', async(req, res) => {
  const id = req.params.id
  try{
    const blog = await Blog.findById(id)
    res.status(200).send(blog)
  }
  catch {
    res.status(500).send({status: false, message: 'Blog not found!'})
  }
})

router.get('/category/:category', async(req, res) => {
  const myCategory = req.params.category
  try {
    const blogByCategory = await Blog.find({category: myCategory}).exec()
    res.status(200).send({count: blogByCategory.length, blogs: blogByCategory})
  }
  catch (e) {
    res.status(500).send({status: false, message: 'Blog not found!'})
    console.log(e.message)
  }
})

router.post('/postBlog', async(req, res) => {
  try {
    const blogData = req.body
    const blog = new Blog(blogData)
    await blog.save()
    res.status(201).send({status: true, message: "Data Inserted Successful"})
  } catch (error) {
    res.status(500).send({status: false, message: "Data Inserted Failed"})
  }
})

module.exports = router
