const reminder_query = require('../query/reminder.query')

const getAllReminders = async (req, res, next) => {
    try {
        // console.log(req.session.details);
        const response = await reminder_query.get_reminders_query()
        return res.status(response.status_code).json(response);
    } catch (error) {
        next(error)
    }
}

const getUpcomingReminders = async (req, res, next) => {
    try {
        // console.log(req.session.details);
        const response = await reminder_query.get_upcoming_reminders_query()
        return res.status(response.status_code).json(response);
    } catch (error) {
        next(error)
    }
}
const getSingleReminder = async (req, res, next) => {
    try {
        const response = await reminder_query.get_single_reminders_query(req.query.id)
        return res.status(response.status_code).json(response);
    } catch (error) {
        next(error)
    }
}


const addReminders = async (req, res, next) => {
    console.log(req);
    try {
        const response = await reminder_query.create_reminder_query(
            req.body.name,
            req.body.description,
            req.body.amount,
            req.body.date,
            req.body.customerNumber,
            'abc'
        )
        return res.status(response.status_code).json(response);
    } catch (error) {
        // console.log(error);
    }
}


const updateReminders = async (req, res, next) => {
    try {
        const response = await reminder_query.update_reminder_query(
            req.body.id,
            req.body.name,
            req.body.description,
            req.body.amount,
            req.body.date,
            req.session.details._id
        )
        return res.status(response.status_code).json(response);
    } catch (error) {
        return res.status(error.status_code).json(error);
    }
}

const updateStatus = async (req, res, next) => {
    try {
        const response = await reminder_query.update_reminder_status_query(
            req.query.id,
            req.query.status,
        )
        return res.status(response.status_code).json(response);
    } catch (error) {
        return res.status(error.status_code).json(error);
    }
}

module.exports = { getAllReminders, getUpcomingReminders, getSingleReminder, addReminders, updateReminders, updateStatus }