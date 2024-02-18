const express = require('express')
const router = express.Router()
const { getAllReminders, getUpcomingReminders, getSingleReminder, addReminders, updateReminders, updateStatus } = require('../controllers/reminders.controller')


router.route('/get-current-reminders').get(getAllReminders)
router.route('/get-upcoming-reminders').get(getUpcomingReminders)
router.route('/get-single-reminder').get(getSingleReminder)
router.route('/add-reminder').post(addReminders)
router.route('/update-reminder').post(updateReminders)
router.route('/update-status').get(updateStatus)


module.exports = router