import React from 'react'
import Field from './Field'
import email from '../assets/icons/email.png'
import lock from '../assets/icons/lock.png'
import view from '../assets/icons/view.png'
import '../styles/component-styles/Form.css'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div >
        <div className='form'>
        <h1>Login</h1>
      <div>
        <Field icon={email} placeholder={'Email'}></Field>
        <Field icon={lock} placeholder={'Password'} view={view}></Field>
        <button className='reg-button login'>Login</button>
        <p>Have no account yet?</p>
        <Link to="/register" className='reg-button'>Register</Link>
      </div>

        </div>
      
    </div>
  )
}

export default Login
