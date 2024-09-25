// import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Portafolio from "./pages/PortafolioBody"
import Projects from "./pages/Projects"
import Projectbyone from "./pages/Projectbyone"
import Error404 from "./pages/Error404"


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path={'/'} element={<Portafolio />} />
        <Route path={'/Projects'} element={<Projects />} />
        <Route path={'/ProjectByOne'} element={<Projectbyone />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div >
  )
}

export default App
