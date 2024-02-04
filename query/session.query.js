const user_model = require('../models/user.model');
const { decryptPassword, encryptPassword } = require('../helper/enc_dec.helper.js');



const check_credentials = async (email, password) => {
    try {
        const checkUser = await user_model.findOne({ email: email })
        if (checkUser) {
            const comparePassword = decryptPassword(password, checkUser.password)
            if (comparePassword) {
                return Promise.resolve({ status: true, status_code: 200, message: "Logged in Successfully", })
            } else {
                return Promise.reject({ status: false, status_code: 206,message: "Invalid Email or Password" })
            }
        } else {
            return Promise.reject({ status: false, status_code: 400,message: 'User not found'})
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

module.exports = { check_credentials }