const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({status: 'Server is running'})
})
app.listen(PORT, () => {
  console.log("Server is running on ", PORT)
})