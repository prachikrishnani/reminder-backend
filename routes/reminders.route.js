const express = require('express')
const router = express.Router()
const { getAllReminders ,addReminders} = require('../controllers/reminders.controller')


router.route('/get-reminders').get(getAllReminders)
router.route('/add-reminder').post(addReminders)


module.exports = router