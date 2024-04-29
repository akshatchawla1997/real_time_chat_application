
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Chats from './pages/Chats'
import Register from './pages/Register'
import Login from './pages/Login'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'

function App() {
  const {user} =useContext(AuthContext)
  return (
    <>
    <NavBar />
    <Container >
      <Routes>
        <Route path='/' element={user ? <Chats/>:<Login/>}/>
        <Route path='/register' element={user ? <Chats/>:<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </Container>
    </>
  )
}

export default App
