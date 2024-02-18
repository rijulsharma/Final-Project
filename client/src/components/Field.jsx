import React from 'react';
import '../styles/component-styles/Field.css';

function Field({ icon, view, type, placeholder }) {
  return (
    <div className='field'>
      <img className='field-icon' src={icon} alt='icon' />
      <input type={type} placeholder={placeholder} />
      <img className='field-view' src={view} alt='' />
    </div>
  );
}

export default Field;
