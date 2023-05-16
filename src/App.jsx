import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import HeaderAll from './components/share/HeaderAll'
import FooterAll from './components/share/FooterAll'
import Navar from './components/share/Navar'
import { useState } from 'react'


function App() {

  const [navOpenClose, setNavOpenClose] = useState("navOpenClose")

  console.log(navOpenClose);


  return (
    <div className='app'>
      
      <HeaderAll setNavOpenClose={setNavOpenClose} navOpenClose={navOpenClose}/>
      
      <Navar navOpenClose={navOpenClose} setNavOpenClose={setNavOpenClose}/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>Esta Ruta no existe</h1>} />
      </Routes>
    </div>
  )
}

export default App
