import { useState } from 'react'
import NavigationBar from './assets/components/NavigationBar'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import ResumeSection from './assets/components/Resumesection'

function App() {


  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <ResumeSection />
    </>
  )
}

export default App