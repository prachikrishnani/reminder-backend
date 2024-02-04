const user_query = require('../query/user.query')

const addUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const response = user_query.create_user_query(req.body.email, req.body.password)
        res.send(response);
    } catch (error) {
        next(error)
    }
}

module.exports = { addUser }