import React from 'react'
import logo from '../assets/logo/Art.png'
import '../styles/scene-styles/AuthForm.css'
import Login from '../components/Login'
import Register from '../components/Register'
import logoBack from '../assets/logo/Back.png';

function AuthForm({path}) {
  return (
    <div className='auth-main'>
        <div className='main-left'>
        
  <img src={logoBack} className="circle-image" alt="circle"></img>
  <img src={logo} className="character-image" alt="character"></img>


            <h1>Welcome aboard my friend</h1>
            <p>just a couple of clicks and we start</p>
        </div>
        <div className='main-right'>
        {path === '/login' && <Login />}
        {path === '/register' && <Register />}
            
        </div>
      
    </div>
  )
}

export default AuthForm
