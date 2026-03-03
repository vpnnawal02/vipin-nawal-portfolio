import React, { useEffect, useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const toggleBorder = () => {
            setScrolled(window.scrollY > 500);
        };

        window.addEventListener("scroll", toggleBorder);
        return () => window.removeEventListener("scroll", toggleBorder)
    }, []);

    return (
        <div className="flex flex-col items-center">
            <nav
                id="nav"
                className={scrolled ? 'fixed w-[90%] lg:w-[80%] z-50 backdrop-blur-xs bg-transparent mt-5 rounded-full border border-purple-500' : 'fixed w-[90%] lg:w-[80%] z-50 backdrop-blur-xs bg-transparent mt-5 rounded-full'}>
                <div className="flex justify-around items-center py-3">
                    {/* Logo */}
                    <div className="text-2xl md:text-3xl font-bold">
                        VIPIN <span className="text-purple-500">NAWAL</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        <ul className="flex gap-10 md:gap-5 lg:gap-10 font-medium">
                            <NavLink to='/' end><li className='hover:underline decoration-4 decoration-purple-500 underline-offset-20 duration-200'>HOME</li></NavLink>
                            <NavLink to='/blogs' end><li className='hover:underline decoration-4 decoration-purple-500 underline-offset-20 duration-200'>BLOGS</li></NavLink>
                            <NavLink to='#resume' end><li className='hover:underline decoration-4 decoration-purple-500 underline-offset-20 duration-200'>RESUME</li></NavLink>
                            <NavLink to='/all-projects' end><li className='hover:underline decoration-4 decoration-purple-500 underline-offset-20 duration-200'>PROJECTS</li></NavLink>
                            <NavLink to='#reviews' end><li className='hover:underline decoration-4 decoration-purple-500 underline-offset-20 duration-200'>REVIEWS</li></NavLink>
                        </ul>
                    </div>






                    {/* Social Icons */}
                    <div className="hidden lg:flex gap-3 ">
                        <a href="https://www.facebook.com/profile.php?id=100008160219044" target="_blank">
                            <FaFacebook className="w-6 h-auto hover:text-purple-500 cursor-pointer duration-200" />
                        </a>
                        <a href="https://github.com/vpnnawal02" target="_blank">
                            <FaGithub className="w-6 h-auto hover:text-purple-500 cursor-pointer duration-200" />
                        </a>
                        <a href="https://www.linkedin.com/in/vipin-nawal02/" target="_blank">
                            <FaLinkedin className="w-6 h-auto hover:text-purple-500 cursor-pointer duration-200" />
                        </a>
                    </div>

                    {/* Theme Toggle */}
                    {/* <ThemeToggle /> */}

                    {/* Mobile Icon */}
                    <div
                        className="md:hidden w-10 h-10 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <FiAlignRight className="w-10 h-10" />
                    </div>
                </div>
            </nav >
            {/* Mobile Menu */}
            < div
                className={`sm:hidden fixed inset-0 z-40 transition-opacity duration-300
    ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
            >
                {/* Overlay */}
                < div
                    className="absolute inset-0 overlay"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Drawer */}
                <div
                    className={`absolute right-0 top-20 h-screen w-[70%] text-center
      mobile-menu
      transform transition-transform duration-300
      ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
    `}
                >
                    <div className="h-full flex flex-col items-center py-10">
                        <ul className="flex flex-col gap-6 text-lg font-medium">
                            <a href="/"><li>HOME</li></a>
                            <a href="/blogs"><li>BLOGS</li></a>
                            <a href="#resume"><li>RESUME</li></a>
                            <a href="/all-projects"><li>PROJECTS</li></a>
                            <a href="#reviews"><li>REVIEWS</li></a>
                        </ul>

                        <div className="flex gap-5 pt-10">
                            <a href="https://www.facebook.com/profile.php?id=100008160219044" target="_blank">
                                <FaFacebook className="w-6 h-auto hover:text-purple-500 cursor-pointer duration-200" />
                            </a>
                            <a href="https://github.com/vpnnawal02" target="_blank">
                                <FaGithub className="w-6 h-auto hover:text-purple-500 cursor-pointer duration-200" />
                            </a>
                            <a href="https://www.linkedin.com/in/vipin-nawal02/" target="_blank">
                                <FaLinkedin className="w-6 h-auto hover:text-purple-500 cursor-pointer duration-200" />
                            </a>
                        </div>

                        <a href="">
                            <button className="bg-purple-500 py-2 px-3 my-10 rounded-sm text-white font-bold">
                                DOWNLOAD RESUME
                            </button>
                        </a>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default NavigationBar;
