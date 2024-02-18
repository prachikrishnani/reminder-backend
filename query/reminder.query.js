const reminder_model = require('../models/reminders.model')


exports.create_reminder_query = async (name, description, amount, date, createdBy) => {
    try {
        let reminder = {
            name: name,
            description: description,
            amount: amount,
            date: date,
            paid: false,
            createdBy: createdBy
        }
        // console.log(reminder);
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

exports.update_reminder_query = async (id, name, description, amount, date, createdBy) => {
    try {
        let reminder = {
            name: name,
            description: description,
            amount: amount,
            date: date,
            paid: false,
            createdBy: createdBy
        }
        let create_reminder = await reminder_model.findOneAndUpdate({ _id: id, reminder })
        if (create_reminder) {
            return Promise.resolve({ status: true, status_code: 200, message: "Reminder Updated Successfully", })
        } else {
            return Promise.reject({ status: false, status_code: 500, message: "DB Operation Failed" });
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

exports.get_reminders_query = async () => {
    try {
        const response = await reminder_model.find({ date: { $lte: new Date() } })
        return Promise.resolve({ status: true, status_code: 200, body: response })
    } catch (error) {
        return Promise.reject(error)
    }
}

exports.get_upcoming_reminders_query = async () => {
    try {
        const response = await reminder_model.find({ date: { $gt: new Date() } })
        return Promise.resolve({ status: true, status_code: 200, body: response })
    } catch (error) {
        return Promise.reject(error)
    }
}

exports.get_single_reminders_query = async (id) => {
    try {
        const response = await reminder_model.find({ _id: id })
        return Promise.resolve({ status: true, status_code: 200, body: response })
    } catch (error) {
        return Promise.reject(error)
    }
}

exports.update_reminder_status_query = async (id, status) => {
    try {
        const response = await reminder_model.findOneAndUpdate({ _id: id, paid: status })
        return Promise.resolve({ status: true, status_code: 200, body: response })
    } catch (error) {
        return Promise.reject(error)
    }
}