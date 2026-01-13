import React from 'react'
import { useState } from 'react';
import { FiAlignRight } from "react-icons/fi";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className='fixed w-full shadow-sm shadow-purple-500 text-white bg-gray-950 z-50'>
            <div className="flex justify-around items-center py-5">
                <div className=" text-3xl font-bold">
                    VIPIN <span className='text-purple-500'>NAWAL</span>
                </div>

                <div className="hidden sm:flex">
                    <ul className='flex gap-10 '>
                        <a href="#home"><li className='hover:text-purple-500'>HOME</li></a>
                        <a href="#about"><li className='hover:text-purple-500'>ABOUT</li></a>
                        <a href="#resume"><li className='hover:text-purple-500'>RESUME</li></a>
                        <a href="#projects"><li className='hover:text-purple-500'>PROJECTS</li></a>
                        <a href="#reviews"><li className='hover:text-purple-500'>REVIEWS</li></a>
                    </ul>
                </div>

                <div className="hidden">
                    social links
                </div>

                {/* mobile icon */}
                <div className="sm:hidden w-10 h-10"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FiAlignRight className='w-10 h-10' />
                </div>
            </div>

            {/* mobile menu */}
            <div className={`
    sm:hidden fixed inset-0 bg-gray-950 backdrop-blur-sm z-40
    transition-all duration-300 ease-in-out mt-20
    ${isMenuOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-full'
                }
`}>
                <div className="sm:hidden h-screen flex flex-col items-center ">
                    <ul className='flex flex-col justify-around items-center h-[40%]'>
                        <a href="#home"><li>HOME</li></a>
                        <a href="#about"><li>ABOUT</li></a>
                        <a href="#resume"><li>RESUME</li></a>
                        <a href="#projects"><li>PROJECTS</li></a>
                        <a href="#reviews"><li>REVIEWS</li></a>
                    </ul>
                    <button className='bg-purple-500 py-2 px-2 rounded-sm text-white font-bold my-5'>DOWNLOAD RESUME</button>
                </div>
            </div>

        </nav>
    )
}

export default NavigationBar
