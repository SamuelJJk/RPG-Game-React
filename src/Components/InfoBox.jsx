import React from 'react'
import '../infoBox.css'
import ExitBtn from './ExitBtn'

function InfoBox({handleHomeClick}) {
  return (
    <div className='infobox'>
      <div className="stats">
        <div className="level">Level: <span className="lvl"></span></div>
        <div className="health">Health: <span className='hp'></span></div>
        <div className="magic">Magic: <span className="mp"></span></div>
      </div>
      <div className="money">Money: <span className="coins"></span></div>
      <ExitBtn handleHomeClick={handleHomeClick}/>
    </div>
  )
}

export default InfoBox
