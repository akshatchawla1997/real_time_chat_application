const express = require('express')
const UserAuthenticationController = require('../controllers/UserAuthenticationController')
const router = express.Router()



router.post('api/v1/register/',UserAuthenticationController.signupNewUser)