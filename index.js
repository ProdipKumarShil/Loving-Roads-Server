const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require("dotenv").config()
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(cors())

const blogRoute = require('./routes/blog')
const userRoute = require('./routes/user')

// mongoose connection
mongoose.connect('mongodb://localhost:27017/blogDB')
// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ta7i6kc.mongodb.net/lovingRoads`)
  .then(() => console.log("DB connected"))
  .catch(e => console.log(e.message))

app.get('/', (req, res) => {
  res.send({status: 'Server is running'})
})

// all routes goes here
app.use('/blog', blogRoute)
app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log("Blog Server is running on ", PORT)
})