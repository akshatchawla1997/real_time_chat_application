
// create chat
// get user chat
// find  chat

const { addAbortListener } = require("nodemailer/lib/xoauth2");
const chatService = require("../services/chatService");

class ChatController{
    async createChat(request, response, next){
        try {
            const {sender, receiver} = request.body;
            if(!sender||!receiver) return response.status(400).json("something went wrong")
            const chat = await chatService.createConversation({sender, receiver})
            return chat.success ? response.status(200).json(chat):response.status(203).json(chat)

        } catch (error) {
            console.log(error)
            next(error)
            response.status(500).json(error)
        }
    }

    async startChat(request, response, next) {
        try {
            const { conversation_id, message } = request.body;
            if (!conversation_id || !message) return response.status(400).json("something went wrong");
            const chat = await chatService.startChat({ conversation_id, message });
            return chat.success ? response.status(200).json(chat) : response.status(203).json(chat);
        } catch (error) {
            next(error); // Pass the error to the error handler middleware
        }
    }
    

    async getConversation(request, response, next){
        try {
            const conversation_id = request.params
            const mesages = chatService.getChatBySenderId(conversation_id)
            return mesages.success ? response.status(200).json(mesages):response.status(203).json(mesages)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    
}

module.exports = new ChatController()