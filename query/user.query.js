const user_model = require('../models/user.model');
const { decryptPassword, encryptPassword } = require('../helper/enc_dec.helper.js');
const { ObjectId } = require('mongodb')

exports.create_user_query = async (email, password) => {
    try {
        console.log(email,password);
        const userDetails = await user_model.findOne({ email: email });
        if (userDetails) {
            console.log(userDetails);
            return Promise.reject({ status: false, status_code: 409, message: "User already exist" });
        } else {
            const encrypted_password = encryptPassword(password);
            let user = await user_model.create({ email, password:encrypted_password })
            if (user) {
                return Promise.resolve({ status: true, status_code: 200, message: "User Created Successfully", })
            } else {
                return Promise.reject({ status: false, status_code: 500, message: "DB Operation Failed" });
            }    
        }
    } catch (error) {
        return Promise.reject(error);
    }
}