import React ,{useState}from 'react'
import baseUrl from "../config"
import {Navigate} from "react-router-dom"
function Login() {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const handelSubmit=()=>{
        const payload={
          email,
          password
        }
        
        fetch(`${baseUrl}/login`,{
          method:"POST",
          body:JSON.stringify(payload),
          headers:{
            'Content-Type':'application/json'
          }
        }).then((res)=>res.json()).then((res)=>{
          console.log(res);
          if(res.token){
            localStorage.setItem("token",res.token);
          }
        
        }).catch((err)=>console.log(err));
    }
  return (
    <div>
      <h1>Login</h1>
      <input type='text' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handelSubmit}>Signup</button>

    </div>
  )
}

export default Login
