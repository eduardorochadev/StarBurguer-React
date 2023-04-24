import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Bebidas  from'./Pages/Bebidas'
import Burguers  from'./Pages/Burguers'
import Combos  from'./Pages/Combos'
import Drinks  from'./Pages/Drinks'


export default function App() {
  return (
    <Routes>
      <Route path='/' exact element = {<Home/>} />
      <Route path='/Bebidas' element = {<Bebidas/>} />
      <Route path='/Burguers' element = {<Burguers/>} />
      <Route path='/Combos' element = {<Combos/>} />
      <Route path='/Drinks' element = {<Drinks/>} />
    </Routes>
  )
}