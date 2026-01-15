import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ResumeSection from '../components/Resumesection'
import Project from '../components/Projects'
import Reviews from '../components/Reviews'
import Skills from '../components/Skills'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <ResumeSection />
            <Project />
            <Reviews />

        </div>
    )
}

export default Home
