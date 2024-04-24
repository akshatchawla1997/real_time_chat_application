const express = require('express')
const UserAuthenticationController = require('../controllers/UserAuthenticationController')
const router = express.Router()



router.post('/register',UserAuthenticationController.signupNewUser)

module.exports = router