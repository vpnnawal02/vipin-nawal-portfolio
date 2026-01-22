import React from 'react'
import profileImg from "../imgs/me_github.png";
// style={{ backgroundImage: "url('/header_bg.jpg')

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-around lg:px-50 lg:pt-10 h-screen'>
            <video
                className='absolute inset-0 object-cover z-0 h-screen'
                autoPlay
                loop
                muted
                playsInline
            >
                <source src='/hero_bg_vid.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-black/80 z-5'></div>
            <div className="text-white mt-30 z-10">
                <img src={profileImg} alt="profileImage" className='w-40 rounded-full shadow-purple-400 shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] bounce-soft sm:w-90' />
            </div>

            <div className="mt-10 px-10 z-10">
                <p className='text-3xl my-5 sm:text-5xl md:text'>HELLO, <br />
                    <span className='font-bold text-4xl sm:text-6xl '>I AM <span className='text-purple-500 decoration-1 underline underline-offset-10'>VIPIN</span></span>
                </p>
                <p className='text-2xl sm:text-3xl sm:pt-5'>FULL STACK SOFTWARE DEVELOPER</p>
                <a
                    href="https://wa.me/918851948143?text=Hi%20Vipin%2C%20I%20am%20interested%20in%20your%20web%20development%20services.
"
                    className="flex items-center justify-center border-purple-500 border-2 py-2 rounded-sm my-10 bg-purple-500 transition duration-200 shadow-purple-400 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] w-full font-medium"
                >
                    HIRE ME
                </a>

            </div>


        </div >
    )
}

export default Hero
