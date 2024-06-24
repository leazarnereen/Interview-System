import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginCompany from './Components/Company/LoginCompany'
import {Routes , Route } from "react-router-dom"
import InterviweeLogin from './Components/Interviwee/InterviweeLogin'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/company-login" element={<LoginCompany/>}/>
      <Route path="/interviwee-login" element={<InterviweeLogin/>}/>

    </Routes>
  )
}

export default App
