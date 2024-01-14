const express = require('express');
const router = express.Router()

router.get('/getBlogs', (req, res) => {
  res.send({blog: 'all blogs'})
})

module.exports = router
