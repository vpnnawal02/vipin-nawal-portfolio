import { useState } from 'react'
import NavigationBar from './assets/components/NavigationBar'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import ResumeSection from './assets/components/Resumesection'
import ProjectCard from './assets/utils/Projectcard'
import Projects from './assets/components/Projects'

function App() {


  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <ResumeSection />
      <Projects />
    </>
  )
}

export default App