import React from 'react'
import Projectcard from '../utils/ProjectCard.jsx'
import { FaArrowRightLong } from "react-icons/fa6";
import hustle_learning from '../imgs/project_images/hustle_learning.png'
import cafe_website from '../imgs/project_images/cafe_website.png'
import gymshala from '../imgs/project_images/gymshala.png'
import shoe_shopping from '../imgs/project_images/shoe_shopping.png'
import salon from '../imgs/project_images/salon.png'

const Projects = () => {
    return (
        <>
            <h1 className='text-5xl font-extrabold my-5 text-center' id="projects">MY <span className='text-purple-500'>PROJECTS</span></h1>

            <div className="flex justify-center ">
                <div className="flex flex-col items-center overflow-scroll sm:overflow-auto py-5 px-5">
                    <div className='flex gap-10 w-full '>

                        {/* project-1 */}
                        <Projectcard
                            name="ED-TECH WEBSITE"
                            image={hustle_learning}
                            description="A modern EdTech platform built for clear learning and seamless user experience"
                            ts1='HTML'
                            ts2='CSS'
                            ts3='Javascript'
                            ts4='Tailwind'
                            ts5='Bootstrap'
                            ts6='Render'
                            github_link='https://github.com/vpnnawal02/hustleLearning.in'
                            live_link='https://hustlelearning-in-0kjy.onrender.com/'
                        />

                        {/* project-2 */}
                        <Projectcard
                            name="OVENKISSED - CAFE"
                            image={cafe_website}
                            description="A modern café website featuring an elegant UI, table booking functionality, and a smooth customer experience built with scalable web technologies."
                            ts1='ReactJS'
                            ts2='Vite'
                            ts3='CSS/Tailwind'
                            ts4='FastAPI'
                            ts5='CORS'
                            ts6='Render/Netlify'
                            github_link='https://github.com/vpnnawal02/ovenkissed-cats-cafe'
                            live_link='https://frabjous-elf-35e678.netlify.app/'
                        />

                        {/* project-3 */}
                        <Projectcard
                            name="GYMSHALA - GYM WEBSITE"
                            image={gymshala}
                            description="A gym web application demonstrating clean UI design, responsive layouts, and real-world business functionality."
                            ts1='HTML'
                            ts2='CSS'
                            ts3='Javascript'
                            ts4='Flask'
                            ts5='Render'
                            ts6='Python'
                            github_link='https://github.com/vpnnawal02/gymshala-static-website'
                            live_link='https://gymshala-static-website.onrender.com/'
                        />

                        {/* project-4 */}
                        <Projectcard
                            name="SHOE-SHOPPING"
                            image={shoe_shopping}
                            description="A modern shoe shopping website with a clean, user-friendly design."
                            ts1='HTML'
                            ts2='CSS'
                            ts3='Javascript'
                            ts4='UX/UI'
                            ts5='Github'
                            ts6='Design'
                            github_link='https://github.com/vpnnawal02/shoes-shopping-website'
                            live_link='https://vpnnawal02.github.io/shoes-shopping-website/'
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-10 ">
                <a href="/all-projects" className='flex items-center gap-1 border-purple-500 border-2 py-2 px-2 rounded-sm my-5 shadow-md hover:cursor-pointer hover:bg-purple-500 transition duration-200 hover:shadow-purple-400  hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)]'>
                    <p>SEE ALL PROJECTS</p><FaArrowRightLong />
                </a>
            </div>
        </>
    )
}

export default Projects
