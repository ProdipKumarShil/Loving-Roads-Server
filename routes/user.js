const express = require('express');
const User = require('../models/user.models');
const router = express.Router()

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