import React, { useState } from 'react'
import baseUrl from "../config"


function Signup() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const handelSubmit=()=>{
        const payload={
          name,
          email,
          password
        }
        
        fetch(`${baseUrl}/signup`,{
          method:"POST",
          body:JSON.stringify(payload),
          headers:{
            'Content-Type':'application/json'
          }
        }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err));
    }
  return (
    <div>
      <h1>Signup</h1>
      <input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)}/>
      <input type='text' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handelSubmit}>Signup</button>

    </div>
  )
}

export default Signup
