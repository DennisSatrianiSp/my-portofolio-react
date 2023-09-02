import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import App from './App';
import About from './About';
import Projects from './Project';
import Detail from './Detail';

const NavigasiPages = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/detail' element={<Detail/>}></Route>
        </Routes>
    </Router>
  )
}

export default NavigasiPages

