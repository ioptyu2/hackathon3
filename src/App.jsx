import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import * as Pages from "./pages"
import {Header} from "./components"
import './App.css'

function App() {
const [pokedex, setPokedex] = useState([])


  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Pages.HomePage/>}/>
        <Route path="/pokedex" element={<Pages.PokedexPage/>}/>

        <Route path="*" element={<Pages.NotFoundPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
