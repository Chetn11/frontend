import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:"flex", justifyContent:"center",gap:"50px"}}>
      <Link to="/todo">Todos</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Navbar
