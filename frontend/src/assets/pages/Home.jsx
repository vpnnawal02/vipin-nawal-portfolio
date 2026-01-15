import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ResumeSection from '../components/Resumesection'
import Project from '../components/Projects'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <ResumeSection />
            <Project />
        </div>
    )
}

export default Home
