import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Chats from './pages/Chats';
import Register from './pages/Register';
import Login from './pages/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { AuthContextProvider } from './AuthContext';

function App() {
  return (
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
  );
}

export default App;
