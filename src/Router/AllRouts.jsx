import React from 'react'
import {Route, Routes} from "react-router-dom"
import Todo from '../components/Todo'
import Login from "../components/Login"
import Signup from "../components/Signup"

function AllRouts() {
  return (
    <Routes>
      <Route path='/todo' element={<Todo/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default AllRouts
