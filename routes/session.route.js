const express = require('express');
const router = express.Router();
const { checkCredentials, deleteSession } = require('../controllers/session.controller')

router.route('/check-creds').post(checkCredentials)
router.route('/destroy-session').get(deleteSession)


module.exports = router