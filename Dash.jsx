import React from 'react'
import Navbar from '../Navbar'
import { Route,Routes } from 'react-router-dom'

function Dash({}) {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/home"/>
   </Routes>
   </> 
  )
}

export default Dash
