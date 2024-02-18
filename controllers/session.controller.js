const session_query = require('../query/session.query')


const checkCredentials = async (req, res, next) => {
    try {
        const response = await session_query.check_credentials(req.body.email, req.body.password)
        if (response) {
            console.log(response);
            req.session.details = response.body
        }
        return res.status(response.status_code).json(response);
    } catch (error) {
        return res.status(error.status_code).json(error);
    }
}


const deleteSession = async (req, res) => {
    try {
        if (req.session.details) {
            req.session.destroy();
            res.status(httpStatus.OK).json({ status: true, statusCode: httpStatus.OK, message: 'Logged out successfully' });
        } else {
            res.status(httpStatus.NOT_FOUND).json({ status: false, statusCode: httpStatus.NOT_FOUND, message: 'SESSION NOT FOUND' });
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

module.exports = { deleteSession, checkCredentials }