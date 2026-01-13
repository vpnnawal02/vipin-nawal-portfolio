import React from 'react'
import { useState } from 'react';
import { FiAlignRight } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
                        <a href="#home"><li className='hover:text-purple-500 duration-200'>HOME</li></a>
                        <a href="#about"><li className='hover:text-purple-500 duration-200'>ABOUT</li></a>
                        <a href="#resume"><li className='hover:text-purple-500 duration-200'>RESUME</li></a>
                        <a href="#projects"><li className='hover:text-purple-500 duration-200'>PROJECTS</li></a>
                        <a href="#reviews"><li className='hover:text-purple-500 duration-200'>REVIEWS</li></a>
                    </ul>
                </div>

                <div className="hidden md:flex gap-3">
                    <div className="">
                        <a href="https://www.facebook.com/profile.php?id=100008160219044" target="_blank">
                            <FaFacebook className='w-6 h-auto hover:text-purple-500 cursor-pointer duration-200' />
                        </a>
                    </div>
                    <div className="">
                        <a href="https://github.com/vpnnawal02" target='_blank'>
                            <FaGithub className='w-6 h-auto hover:text-purple-500 cursor-pointer duration-200' />
                        </a>
                    </div>
                    <div className="">
                        <a href="https://www.linkedin.com/in/vipin-nawal02/" target="_blank">
                            <FaLinkedin className='w-6 h-auto hover:text-purple-500 cursor-pointer duration-200' />
                        </a>
                    </div>
                </div>

                {/* mobile icon */}
                <div className="sm:hidden w-10 h-10"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FiAlignRight className='w-10 h-10' />
                </div>
            </div>

            {/* mobile menu */}
            <div className={`
    sm:hidden fixed inset-0 bg-white-95 backdrop-blur-sm z-40
    transition-all duration-300 ease-in-out mt-21 w-[70%] left-[30%]
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
                    <div className="flex sm:hidden gap-3 py-5">
                        <div className="">
                            <a href="https://www.facebook.com/profile.php?id=100008160219044" target="_blank">
                                <FaFacebook className='w-6 h-auto hover:text-purple-500 cursor-pointer duration-200' />
                            </a>
                        </div>
                        <div className="">
                            <a href="https://github.com/vpnnawal02" target='_blank'>
                                <FaGithub className='w-6 h-auto hover:text-purple-500 cursor-pointer duration-200' />
                            </a>
                        </div>
                        <div className="">
                            <a href="https://www.linkedin.com/in/vipin-nawal02/" target="_blank">
                                <FaLinkedin className='w-6 h-auto hover:text-purple-500 cursor-pointer duration-200' />
                            </a>
                        </div>
                    </div>
                    <button className='bg-purple-500 py-2 px-2 rounded-sm text-white font-bold my-5'>DOWNLOAD RESUME</button>
                </div>
            </div>

        </nav>
    )
}

export default NavigationBar
