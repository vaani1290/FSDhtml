import React, { useState } from 'react'

function Registration() {
    const[myname,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[data,setObject]=useState();
    function getData(e){
        // alert("hello "+myname);
        // alert("hello "+email);
        // alert("hello "+password);
        e.preventDefault();
        const dataObject={
            myname,email,password
        }
        setObject(dataObject);
    }
  return (
    <div>
        <div>
            {JSON.stringify(data)}
        </div>
        <form>
  <div class="form-group">
    <label for="exampleInput">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Name" />
    <label for="exampleInput">Email</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="text"  class="form-control" id="exampleInputemail" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={getData} class="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Registration