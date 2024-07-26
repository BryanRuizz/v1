// import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Portafolio from "./pages/PortafolioBody"
import Projects from "./pages/Projects"


function App() {

  return (
    <div className='App'>
    <Routes>
      <Route path={'/'} element={<Portafolio />} />
      <Route path={'/Projects'} element={<Projects />} />
    </Routes>
  </div >
  )
}

export default App
