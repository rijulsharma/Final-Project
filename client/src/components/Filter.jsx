import React from 'react'
import '../styles/component-styles/Filter.css'
function Filter({text1,text2,text3}) {
  return (
    <div className='filter'>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </div>
  )
}

export default Filter
