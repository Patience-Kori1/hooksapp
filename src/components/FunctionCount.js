import React from 'react'

function FunctionCount() {
    const [count, setCount] = useState(0);

    setCount(prevState => prevState +1 )

  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default FunctionCount
