import React from "react";
import about_image from "../imgs/about.png";

const HIGHLIGHTS = ["FastAPI", "Django", "React", "PostgreSQL", "Tailwind CSS", "REST APIs"];

const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden scroll-mt-24 px-6 sm:px-10 lg:px-16 py-20 sm:py-28"
        >
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Text — left on desktop, below image on mobile */}
                <div className="flex flex-col items-start text-left order-2 lg:order-1">
                    {/* Eyebrow */}
                    <p className="font-mono text-[11px] sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-purple-600 dark:text-purple-400 mb-4 sm:mb-6">
                        About Me
                    </p>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-[1.15] mb-4 sm:mb-6">
                        I build{" "}
                        <span className="text-purple-500">scalable systems</span>{" "}
                        and the interfaces people love.
                    </h2>

                    {/* Body */}
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-4 sm:mb-5">
                        I&apos;m a{" "}
                        <span className="text-purple-500 font-semibold">
                            Full-Stack Developer
                        </span>{" "}
                        specializing in Python backend development with FastAPI and
                        Django, alongside modern frontend technologies like React.
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8 sm:mb-10">
                        My focus is on writing reliable, maintainable code, designing
                        efficient system architectures, and delivering meaningful user
                        experiences — from database to deployment.
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
                        {HIGHLIGHTS.map((item) => (
                            <span
                                key={item}
                                className="font-mono text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 dark:bg-purple-500/10 text-gray-700 dark:text-gray-200"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="px-8 py-3.5 rounded-sm bg-purple-600 hover:bg-purple-500 text-white font-semibold text-center transition duration-200 hover:shadow-purple-400 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)]"
                        >
                            View Projects
                        </a>
                        <a
                            href="/resume"
                            className="px-8 py-3.5 rounded-sm border-2 border-purple-500 font-semibold text-center transition duration-200 hover:bg-purple-500 hover:text-white hover:shadow-purple-400 hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]"
                        >
                            My Resume
                        </a>
                    </div>
                </div>

                {/* Image — right on desktop, on top on mobile */}
                <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                    <div className="relative">
                        {/* Glow behind image */}
                        <div aria-hidden="true" className="absolute inset-0 -m-6 rounded-3xl bg-purple-500/20 dark:bg-purple-500/25 blur-3xl" />
                        <img
                            src={about_image}
                            alt="Full Stack Developer working on scalable web applications"
                            className="relative w-64 sm:w-80 lg:w-[26rem] rounded-2xl object-cover ring-1 ring-purple-500/30 shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
