import React from 'react'
import profileImg from "../imgs/me_github.png";
const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-gray-950 lg:flex-row-reverse lg:justify-around lg:px-50 lg:pt-10 h-screen'>

            <div className="text-white mt-30 ">
                <img src={profileImg} alt="profileImage" className='w-40 rounded-full shadow-purple-400 shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] bounce-soft sm:w-90' />
            </div>

            <div className="mt-10 px-10">
                <p className='text-3xl my-5 sm:text-5xl md:text'>HELLO, <br />
                    <span className='font-bold text-4xl sm:text-6xl '>I AM <span className='text-purple-500 decoration-1 underline underline-offset-10'>VIPIN NAWAL</span></span>
                </p>
                <p className='text-2xl sm:text-3xl sm:pt-5'>FULL STACK SOFTWARE DEVELOPER</p>
            </div>

        </div>
    )
}

export default Hero
