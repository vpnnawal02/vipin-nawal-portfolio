import React from 'react'
import about_image from '../imgs/about.png'

const About = () => {
    return (
        <div className='flex flex-col items-center py-10 '>

            <h1 className='text-5xl font-extrabold my-5'>ABOUT <span className='text-purple-500'>ME</span></h1>

            <div className="flex flex-col items-center justify-center sm:flex-row sm:w-full md:gap-40">

                <div className="w-50 h-auto sm:w-80">
                    <img src={about_image} alt="about_me_image" className='rounded-sm' />
                </div>

                <div className="w-80 my-10">
                    <p className='sm:text-lg'>I am a <span className='font-bold text-purple-500 sm:text-m'>Full-Stack Developer</span> specializing in Python backend development and modern web technologies. <br />
                        <br />
                        I enjoy building clean, scalable applications and continuously improving my skills by working on real-world projects. My focus is on writing reliable code, understanding systems deeply, and delivering meaningful user experiences.
                    </p>
                </div>

            </div>


        </div>
    )
}

export default About
