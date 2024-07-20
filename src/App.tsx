import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Portafolio from './pages/PortafolioBody';


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path={'/'} element={<Portafolio />} />
        <Route path={'/Projects'} element={<Projects />} />
      </Routes>
    </div >
  );
}

export default App;
