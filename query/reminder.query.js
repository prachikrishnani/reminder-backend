const reminder_model = require('../models/reminders.model')


exports.create_reminder_query = async (name, description, amount) => {
    console.log(reminder_model);
    try {
        let reminder = {
            name: name,
            description: description,
            amount: amount,
            date: new Date(),
            paid: false,
            session: 'abc@user'
        }
        console.log(reminder);
        let create_reminder = await reminder_model.create(reminder)
        console.log(create_reminder);
        if (create_reminder) {
            return Promise.resolve({ status: true, status_code: 200, message: "Reminder Created Successfully", })
        } else {
            return Promise.reject({ status: false, status_code: 500, message: "DB Operation Failed" });
        }
    } catch (error) {
        console.log(error);
    }
}