import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Projectcard = ({ name, image, description, ts1, ts2, ts3, ts4, ts5, ts6, github_link, live_link }) => {
    return (
        // main container
        <div className='w-75 h-105 border border-purple-500 flex flex-col items-center rounded-lg hover:shadow-purple-400 shadow-[0_0_20px_5px_rgba(0,0,0,0.3)]' id="projectcard">

            {/* sub-container */}
            <div className=" m-2 w-70 h-full text-center">

                {/* image */}
                <div className="">
                    <img src={image} alt="" className='' />
                </div>

                {/* Name */}
                <div className="">
                    <h2 className='text-xl font-bold py-2'>{name}</h2>
                </div>

                {/* short description */}
                <div className="">
                    <p className='text-sm text-gray-200'>{description}</p>
                </div>

                {/* tech stack */}
                <div className=" flex flex-col items-center justify-center gap-1 py-3">
                    <ul className=' grid grid-cols-3 gap-1 items-center'>
                        <li className='text-xs border border-gray-500/80 rounded-full px-2 py-1'>{ts1}</li>
                        <li className='text-xs border border-gray-500/80 rounded-full px-2 py-1'>{ts2}</li>
                        <li className='text-xs border border-gray-500/80 rounded-full px-2 py-1'>{ts3}</li>
                        <li className='text-xs border border-gray-500/80 rounded-full px-2 py-1'>{ts4}</li>

                        <li className='text-xs border border-gray-500/80 rounded-full px-2 py-1'>{ts5}</li>
                        <li className='text-xs border border-gray-500/80 rounded-full px-2 py-1'>{ts6}</li>
                    </ul>
                </div>

                {/* link icons */}
                <div className="flex justify-center gap-15">
                    <div className="flex-col items-center justify-center">
                        <a href={github_link}>
                            <div className="flex justify-center">
                                <FaGithub className='w-8 h-auto' />
                            </div>
                            <p>Github</p>
                        </a>

                    </div>
                    <div className="flex-col items-center justify-center">
                        <a href={live_link}>
                            <div className="flex justify-center">
                                <FaLink className='w-8 h-auto' />
                            </div>
                            <p>Live Link</p>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectcard
