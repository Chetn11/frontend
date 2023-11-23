import React,{useState, useEffect} from 'react'
import baseUrl from "../config"

function Todo() {

  const[todo,setTodo]=useState([]);
  const token=localStorage.getItem("token")
  const getData=()=>{
    fetch(`${baseUrl}/todos`,{
      method:"GET",
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then((res)=>res.json()).then((res)=>setTodo(res.todo)).catch((err)=>console.log(err));
  }

  console.log(todo)
  useEffect(()=>{
    getData();
  },[])

  if(!localStorage.getItem("token"))
  {
    return <h1>Login first</h1>
  }
  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={()=>localStorage.clear("token")}>logout</button>
      <input />
    </div>
  )
}

export default Todo
