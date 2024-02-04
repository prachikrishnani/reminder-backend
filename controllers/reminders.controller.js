const reminder_query = require('../query/reminder.query')

const getAllReminders = async (req, res, next) => {
    try {
        const response = await reminder_query.get_reminders_query()
        return res.status(response.status_code).json(response);
    } catch (error) {
        next(error)
    }
}


const addReminders = async (req, res, next) => {
    try {
        const response = await reminder_query.create_reminder_query(
            req.body.name,
            req.body.description,
            req.body.amount,
            req.body.createdBy
        )
        return res.status(response.status_code).json(response);
    } catch (error) {
        return res.status(error.status_code).json(error);
    }
}

module.exports = { getAllReminders, addReminders }