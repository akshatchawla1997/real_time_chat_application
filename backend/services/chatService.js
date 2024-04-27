const { execute } = require("../config/databases/queryWrapperMysql");
const { v4 : uuidv4 } =require('uuid');

class ChatService{
    async getChatBySenderId(id){
        console.log(id)
        const query = "select * from messages where conversation_id = ?"
        const messagesResult = await execute(query, [id])
        console.log(messagesResult)
        if(messagesResult.length > 0){
            return {"success":true, "message":"chat found  successfully", "data":messagesResult}
        }else{
            return {"success":false, "message":"no chat found", "data":messagesResult}
        }
    }

    async createConversation(conversationDetails){
        let query = 'select id from conversations where sender_id = ? and receiver_id = ?'
        const existingResult = await execute(query, [conversationDetails.sender, conversationDetails.receiver]) 
        if(existingResult.length > 0 ){
            return {"success":true, "id":existingResult[0].id}
        }else{
            let id = uuidv4()
            query = 'insert into conversations(id, sender_id, receiver_id)values(?,?,?)'
            const insertResult = await execute(query, [id,conversationDetails.sender, conversationDetails.receiver])
            console.log(insertResult)
            return (insertResult.affectedRows > 0)?
            {"success":true, "message": "conversation created successfully","id":id}:{"success":
             false, message: "No rows affected" }
        }
    }

    async startChat(chat){
        try {
            const query = 'INSERT INTO messages (conversation_id, message_text)VALUES (?, ?);'
            const result = await execute(query, [chat.id, chat.message]);
            console.log(result)
            return (result.affectedRows > 0)?
            {"success":true, "message":"chat initiated successfully"}:
            {"success":false, message: "No rows affected" }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ChatService()