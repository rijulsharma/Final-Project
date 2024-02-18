import React from 'react'
import Field from '../components/Field'
import '../styles/component-styles/Form.css'
import user from '../assets/icons/user.png'
import email from '../assets/icons/email.png'
import lock from '../assets/icons/lock.png'
import view from '../assets/icons/view.png'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      <div className='form'>
        <h1>Register</h1>
        <Field icon={user} placeholder={'Name'}></Field>
        <Field icon={email} placeholder={'Email'}></Field>
        <Field icon={lock} placeholder={'Password'} view={view}></Field>
        <Field icon={lock} placeholder={'Confirm Password'} view={view}></Field>
        <button className='reg-button'>Register</button>
        <p>Have an account?</p>
        <Link to="/login" className='reg-button login'>Login</Link>
      </div>
    </div>
  )
}

export default Register
