import React, { useEffect, useState } from 'react'

function Useeffectwork() {
    const[count,setCount]=useState(10);
    const[pointer,setPointer]=useState(100);
    function doIncrement(){
        setCount(count+20);
    }
    function doPointer(){
        setPointer(pointer-10);
    }
    useEffect(()=>{
        console.log("comment is rendered using count"+count);
        console.log("comment is rendered using pointer"+pointer);
    
    },[count,pointer])
  return (
    <div>count value:{count}
    <div>
        <button onClick={doIncrement}>Increment</button>
        <button onClick={doPointer}>Pointer</button>
        
        </div>
        </div>
  )
}

export default Useeffectwork
