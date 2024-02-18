import React from 'react'
import '../styles/component-styles/Settings.css'
import Field from '../components/Field'
import user from '../assets/icons/user.png'
import lock from '../assets/icons/lock.png'
import view from '../assets/icons/view.png'
import '../styles/component-styles/Form.css'
function Settings() {
  return  (
    <div className='settings'>
      <div className='home-title-row'>
        <h1>Settings</h1>
      </div>
      <div className='settings-content'>
        <Field icon={user} placeholder={'Name'}></Field>
        <Field icon={lock} placeholder={'Old Password'} view={view}></Field>
        <Field icon={lock} placeholder={'New Password'} view={view}></Field>
        <button className='reg-button login'>Update</button>
      </div>
    </div>
  ) ;
}


export default Settings
