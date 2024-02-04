const reminder_model = require('../models/reminders.model')


exports.create_reminder_query = async (name, description, amount,createdBy) => {
    try {
        let reminder = {
            name: name,
            description: description,
            amount: amount,
            date: new Date(),
            paid: false,
            session: 'abc@user',
            createdBy:createdBy
        }
        let create_reminder = await reminder_model.create(reminder)
        if (create_reminder) {
            return Promise.resolve({ status: true, status_code: 200, message: "Reminder Created Successfully", })
        } else {
            return Promise.reject({ status: false, status_code: 500, message: "DB Operation Failed" });
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

exports.get_reminders_query = async () => {
    try {
        const response = await reminder_model.find({})
        return Promise.resolve(response)
    } catch (error) {
        return Promise.reject(error)
    }
}