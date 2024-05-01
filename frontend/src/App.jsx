import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {Chats} from './pages/Chats';
import Register from './pages/Register';
import Login from './pages/Login';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { AuthContext } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
import ApiCalls from "./pages/ApiCalls";

export function App() {
  const {user} = useContext(AuthContext)
  return (
    <ChatContextProvider user={user}>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Chats />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={<Navigate to='/'/>}/>
            <Route path='/api' element={<ApiCalls/>}/>
          </Routes>
        </Container>
    </ChatContextProvider>
  );
}

