import {Children, createContext, useEffect, useState} from 'react' 
import { baseURL, postRequest, getRequest } from '../services'

export const ChatContext = createContext()

export const ChatContextProvider = ({Children, user}) => {
    const [userChats, setUserChats] = useState(null)
    const [isChatLoading, setIsChatLoading] = useState(false)
    const [chatError, setChatError] = useState(null)

    useEffect(()=>{
        const getUserChats = async()=>{
            if(user?.id){
                setIsChatLoading(true)
                setChatError(null)
                const response = await getRequest(`${baseURL}/chats/${user?.id}`)
                setIsChatLoading(false)
                if(response.error){
                    return setChatError(response)
                }
                setUserChats(response)
            }
        }
    },[])
    return <ChatContext.Provider value={{
        userChats,
        isChatLoading,
        chatError
    }}>
        {Children}
    </ChatContext.Provider>
}
