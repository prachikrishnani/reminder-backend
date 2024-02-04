const express = require('express')
const router = express.Router()
const { addUser } = require('../controllers/user.controller')

router.route('/add-user').post(addUser)

module.exports = router