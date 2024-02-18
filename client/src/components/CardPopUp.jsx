import React from 'react'
import '../styles/component-styles/CardPopUp.css'
function CardPopUp() {
  return (
   <>
    <div className="overlay">
      <div className="card-popup-container">
        <div className='card-popup-container-content'>
        <p>Title <span class="asterisk">*</span></p>
        <input placeholder='Enter Task Title'></input>
        <div className='priority-select'>
            <p>Select Priority <span class="asterisk">*</span></p>
            
            <div className='priority'><span class="bullet-point">&#8226;</span><p>HIGH PRIORITY</p></div>
            <div className='priority'><span class="bullet-point m">&#8226;</span><p>MODERATE PRIORITY</p></div>
            <div className='priority'><span class="bullet-point l">&#8226;</span><p>LOW PRIORITY</p></div>
            
        </div>
        <p>Checklist(0/0) <span class="asterisk">*</span></p>
        <button className='add-task-btn'>+ Add New</button> 
        </div>

      <div className='buttons'><button className='select-date-btn'>Select Due Date</button>
      <button className='btn'>Cancel</button>
      <button className='btn save'>Save</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default CardPopUp



