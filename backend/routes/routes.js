const express = require('express')
const UserAuthenticationController = require('../controllers/UserAuthenticationController')
const router = express.Router()



router.post('/register',UserAuthenticationController.signupNewUser)
router.patch('/login', UserAuthenticationController.loginUser)

module.exports = router