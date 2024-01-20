const express = require('express');
const User = require('../models/user.models');
const router = express.Router()

router.get('/getUsers', async(req, res) => {
  try{
    const users = await User.find()
    res.status(201).send({count: users.length, users: users})
  }
  catch{
    res.status(500).send({status: false, message: "Failed to get users"})
  }
})

router.post('/addUser', async (req, res) => {
  try {
    const userData = req.body
    const findEmail = await User.findOne({ email: userData.email }).exec()

    if (findEmail) {
      res.status(409).send({ status: false, message: 'This email is already used!' })
    } else {
      const user = new User(userData)
      await user.save()
      res.status(201).send({ status: true, message: 'User created successfully!' })
    }

  } catch (e) {
    res.status(500).send({ status: true, message: 'Failed to create user!' })
  }
})

module.exports = router