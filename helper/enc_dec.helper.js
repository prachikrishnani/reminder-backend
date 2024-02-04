const bcrypt = require('bcrypt');
const crypto = require('crypto-js');
const dotenv = require("dotenv");


exports.encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(password, salt);
    return hash
};

exports.decryptPassword = (password, originalPassword) => {
    const comparepassword = bcrypt.compareSync(password, originalPassword);
    return comparepassword
};


exports.decrypt_query = (encrypted_string) => {
    try {
        if(encrypted_string){
            encrypted_string = encrypted_string.replace(/ /g, "+");
            const bytes = crypto.AES.decrypt(encrypted_string, process.env.ENC_SECRET);
            const original_string = bytes.toString(crypto.enc.Utf8)
            return original_string;
        }else{
            return ''
        }
    } catch (error) {
        console.error(error);
        return "";
    }
};