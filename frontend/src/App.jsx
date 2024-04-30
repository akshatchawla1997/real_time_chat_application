import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Chats from './pages/Chats';
import Register from './pages/Register';
import Login from './pages/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <ChatContextProvider user={user}>
      <AuthContextProvider>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Chats />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        </Container>
      </AuthContextProvider>
    </ChatContextProvider>
  );
}

export default App;
