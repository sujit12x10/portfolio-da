import { useState } from 'react'
import './App.css'
import { Header, Home, About, Skills, Qualification, Work, Contact, Footer, ScrollUp } from './index'

function App() {
 
  return (
    <>
      <Header />  
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Qualification />
        <Contact />
      </main>   
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
