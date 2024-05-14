import React from 'react'

function ExitBtn({handleHomeClick}) {
  return (
    <div>
      <button className="exit" onClick={()=>{handleHomeClick()}}>Exit</button>
    </div>
  )
}

export default ExitBtn
