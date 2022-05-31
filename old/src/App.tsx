import React, { useState } from 'react'
import Home from './Common'
import Navbar from './Common/Navbar/Navbar'
const App = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleChange = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <>
      <Navbar navbarState={navbarOpen} onChange={handleChange} />
      <Home />
    </>
  )
}
export default App
