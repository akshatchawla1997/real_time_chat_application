import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { Container, Stack } from 'react-bootstrap';
import UserChat from '../components/UserChat';
import { AuthContext } from '../context/AuthContext';

export function Chats() {
    const { user } = useContext(AuthContext);
    
    const { userChats, isChatLoading, chatError } = useContext(ChatContext);

    console.log("user chats", userChats);
    
    return (
        <Container>
            {userChats?.length < 1 ? null : 
            <Stack direction='horizontal' className='align-items-start'>
                <Stack className='messages-box flex gap-4 pr-3'>
                    {isChatLoading && <p>Loading Chats.....</p>}
                    {userChats != null && userChats.map((chat, index) => {
                        return (
                            <div key={index}>
                                <UserChat chat={chat} user={user} />
                            </div>
                        )
                    })}
                    List
                </Stack>
                <p>Chatbox</p>
            </Stack>}
        </Container>
    );
}

export default Chats;
