import React, { createContext, useEffect, useState } from 'react';
import { baseURL, getRequest } from '../services';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState(null);
    const [isChatLoading, setIsChatLoading] = useState(false);
    const [chatError, setChatError] = useState(null);

    useEffect(() => {
        const getUserChats = async () => {
            if (user?.id) {
                setIsChatLoading(true);
                setChatError(null);
                try {
                    const response = await getRequest(`${baseURL}/chat/${user.id}`);
                    console.log(response, "response is here");
                    setIsChatLoading(false);
                    if (response.error) {
                        return setChatError(response);
                    }
                    setUserChats(response);
                } catch (error) {
                    setIsChatLoading(false);
                    setChatError({ error: true, message: "Internal server error" });
                }
            }
        };

        getUserChats();
    }, [user]);

    return (
        <ChatContext.Provider
            value={{
                userChats,
                isChatLoading,
                chatError
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};