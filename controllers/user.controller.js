const user_query = require('../query/user.query')

const addUser = async (req, res, next) => {
    try {
        const response = await user_query.create_user_query(req.body.email, req.body.password)
        return res.status(response.status_code).json(response);
    } catch (error) {
        return res.status(error.status_code).json(error);
    }
}

module.exports = { addUser }