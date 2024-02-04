const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Émail id is required']
    },
    password: {
        type: String,
        required: [true, 'Password id is required']
    }
})

module.exports = mongoose.model("User", userSchema)