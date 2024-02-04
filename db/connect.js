const mongoose = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    })
    console.log('çonnected to DB');
}
module.exports = connect