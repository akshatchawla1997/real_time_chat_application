import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { Container, Stack } from 'react-bootstrap';

function Chats() {
    const { userChats, isChatLoading, chatError } = useContext(ChatContext);
    console.log("user chats", userChats);
    
    return (
        <Container>
            {userChats?.lenth < 1 ?null : <Stack direction='horizontal' className='align-items-start'>
                <Stack className='flex gap-4 '>
                    List
                </Stack>
                <p>Chatbox</p>
                </Stack>}
        </Container>
    );
}

export default Chats;
