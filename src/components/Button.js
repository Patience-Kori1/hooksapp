import React from 'react'

function Button({handleClick, btnColor, increment, children}) {
  return (
    <div className= "container">
      <button onClick={handleClick} className= {`btn btn-${btnColor}`}> + {increment} %  </button>
      <button onClick={handleClick} className= {`btn btn-${btnColor}`}> - {increment} % </button>
    </div>
  )
}

export default Button
