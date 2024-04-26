const { execute } = require("../config/databases/queryWrapperMysql");

class ChatService{
    async getChatBySenderId(conversation_id){
        const query = "select * from messages where conversation_id = ?"
        const messagesResult = await execute(query, [conversation_id])
        if(messagesResult.length > 0){
            return {"success":true, "message":"chat found  successfully", "data":messagesResult}
        }else{
            return {"success":false, "message":"no chat found", "data":messagesResult}
        }
    }

    async createChat(conversationDetails){
        const query = 'insert into conversations(sender_id, receiver_id)values(?,?)'
        const insertResult = await execute(query, [conversationDetails.sender, conversationDetails.receiver])
        console.log(insertResult)
        return (insertResult.affectedRows > 0)?
        {"success":true, "message": "conversation created successfully","id":""}:{"success":
         false, message: "No rows affected" }
    }

    async 
}

module.exports = new ChatService()