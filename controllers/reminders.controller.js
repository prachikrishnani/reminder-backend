const reminder_query = require('../query/reminder.query')

const getAllReminders = async (req, res) => {
    res.status(200).json({ msg: 'list of reminders' })
}


const addReminders = async (req, res, next) => {
    console.log(req.body);
    try {
        const response = reminder_query.create_reminder_query(
            req.body.name,
            req.body.description,
            req.body.amount
        )
        res.send(response);
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllReminders, addReminders }