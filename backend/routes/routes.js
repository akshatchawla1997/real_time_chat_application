const express = require('express')
const UserAuthenticationController = require('../controllers/UserAuthenticationController')
const chatController = require('../controllers/chatController')
const router = express.Router()



router.post('/register',UserAuthenticationController.signupNewUser)
router.patch('/login', UserAuthenticationController.loginUser)
router.put('/conversation', chatController.createChat)
router.post('/chat', chatController.startChat)
router.get('/chat/:id',chatController.getConversation)

module.exports = router