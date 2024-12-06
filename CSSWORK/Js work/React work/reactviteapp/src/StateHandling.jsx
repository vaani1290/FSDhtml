import React, { useState } from 'react'

function StateHandling() {
    const[count,setcount]=useState(20);
    function doIncrement(){
        setcount(count+20)
    }
  return (
    <div>
    <div>StateHandling 
        <h2>Counter Value:{count}</h2>
    </div>
    <div>
        <button onClick={doIncrement}>Increment</button>
    </div>
    </div>
  )
}

export default StateHandling