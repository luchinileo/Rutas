

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Contacto } from './pages/Contacto'
import { AcercaDe } from './pages/AcercaDe'
import { Error } from './pages/Error'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Inicio/>}/>
      <Route path='/acercade' element={<AcercaDe/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
