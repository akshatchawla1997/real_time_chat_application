
// create chat
// get user chat
// find  chat

const chatService = require("../services/chatService");

class ChatController{
    async createChat(request, response, next){
        try {
            const {firstId, secondId} = request.body;
            const chat = 
        } catch (error) {
            console.log(error)
            response.status(500).json(error)
        }
    }

    async getConversation(request, response, next){
        try {
            const conversation_id = request.body
            const mesages = chatService.getChatBySenderId(conversation_id)
            
        } catch (error) {
            console.log(error)
        }
    }

    
}