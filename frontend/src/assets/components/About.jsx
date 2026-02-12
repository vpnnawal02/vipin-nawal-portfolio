import React from "react";
import about_image from "../imgs/about.png";

const About = () => {
    return (
        <section
            id="about"
            className="py-24 px-6 bg-transparent lg:h-screen"
        >
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        About <span className="text-purple-500">Me</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg">
                        Full-Stack Developer | Python Backend Specialist
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={about_image}
                            alt="Full Stack Developer working on scalable web applications"
                            className="rounded-2xl shadow-2xl w-80 md:w-[85%] transition duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-bold mb-6 leading-snug">
                            Building Scalable Backend Systems & Modern Web Applications
                        </h3>

                        <p className="text-gray-300 leading-relaxed text-lg">
                            I am a{" "}
                            <span className="text-purple-500 font-semibold">
                                Full-Stack Developer
                            </span>{" "}
                            specializing in Python backend development using FastAPI and
                            Django, alongside modern frontend technologies like React.
                            <br />
                            <br />
                            My focus is on writing reliable, maintainable code, designing
                            efficient system architectures, and delivering meaningful user
                            experiences.
                        </p>



                        {/* CTA Buttons */}
                        <div className="flex gap-4 mt-8">
                            <a href="#projects">
                                <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-sm font-medium text-white ">
                                    View Projects
                                </button>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
