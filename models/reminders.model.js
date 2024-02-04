const mongoose = require('mongoose')

const reminderListSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be provided']
    },
    amount: {
        type: Number,
        required: [true, 'Amount must be provided']
    },
    date: {
        type: Date,
        required: [true, 'Date must be provided']
    },
    description: {
        type: String
    },
    paid: {
        type: Boolean,
        default: false,
        required: [true, 'Paid must be provided']
    },
    customerNuber: {
        type: Number,
        required: false,
        validate(value) {
            const mobileNumberRegex = /^[6-9]\d{9}$/;
            if (!mobileNumberRegex.test(value)) {
                throw new Error('Incorrect Mobile Number Please Check and try again');
            }
        },
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    createdBy: {
        type: String
    }
})

module.exports = mongoose.model("Reminder", reminderListSchema)