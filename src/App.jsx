import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Experiance/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App