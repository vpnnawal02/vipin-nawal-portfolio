import React from 'react'
import profileImg from "../imgs/profile-img.png";
import HeroBackground from './HeroBackground';

const TECH_STACK = ["React", "Next.js", "TypeScript", "Node.js", "Supabase", "PostgreSQL"];

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative overflow-hidden min-h-screen flex items-center px-6 sm:px-10 lg:px-16 pt-32 pb-24"
        >
            <HeroBackground />

            <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Text — left on desktop, below image on mobile */}
                <div className="flex flex-col items-start text-left order-2 lg:order-1">


                    {/* Eyebrow */}
                    <p className="font-mono text-[11px] sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-purple-600 dark:text-purple-400 mb-4 sm:mb-6">
                        Full Stack Developer · Webentric
                    </p>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-4 sm:mb-6">
                        I build digital experiences{" "}
                        <span className="text-purple-500">that get remembered.</span>
                    </h1>

                    {/* Supporting text */}
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8 sm:mb-10">
                        I&apos;m Vipin, a full stack developer creating modern websites
                        and web applications that combine thoughtful design, solid
                        engineering, and real business value.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="px-8 py-3.5 rounded-sm bg-purple-600 hover:bg-purple-500 text-white font-semibold text-center transition duration-200 hover:shadow-purple-400 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)]"
                        >
                            View My Work
                        </a>
                        <a
                            href="https://wa.me/918851948143?text=Hi%20Vipin%2C%20I%20am%20interested%20in%20your%20web%20development%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 rounded-sm border-2 border-purple-500 font-semibold text-center transition duration-200 hover:bg-purple-500 hover:text-white hover:shadow-purple-400 hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]"
                        >
                            Let&apos;s Work Together
                        </a>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-col items-start gap-3">
                        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500">
                            Tech Stack
                        </p>
                        <p className="font-mono text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-loose">
                            {TECH_STACK.map((tech, i) => (
                                <span key={tech} className="whitespace-nowrap">
                                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                                    {i < TECH_STACK.length - 1 && (
                                        <span className="mx-2 text-purple-500">·</span>
                                    )}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>

                {/* Image — right on desktop, on top on mobile */}
                <div className="relative flex flex-col items-center gap-5 justify-center lg:justify-end order-1 lg:order-2">
                    <div className="relative">
                        {/* Glow behind image */}
                        <div aria-hidden="true" className="absolute inset-0 -m-6 rounded-full bg-purple-500/20 dark:bg-purple-500/25 blur-3xl" />
                        <img
                            src={profileImg}
                            alt="Vipin Nawal — Full Stack Developer"
                            className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-[22rem] xl:h-[22rem] rounded-full object-cover ring-4 ring-purple-500/30 shadow-purple-400 shadow-[0_0_30px_5px_rgba(0,0,0,0.3)]"
                        />

                    </div>
                    {/* Availability */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5  border border-purple-500/30 bg-purple-500/5 dark:bg-purple-500/10 text-xs sm:text-sm mb-6 sm:mb-8">
                        <span className="relative flex w-2.5 h-2.5 shrink-0">
                            <span className="animate-ping absolute inline-flex rounded-full h-full w-full bg-green-500 opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-gray-700 dark:text-gray-200 font-medium">
                            Available for select projects
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#about"
                className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                aria-label="Scroll to explore"
            >
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase whitespace-nowrap">
                    Scroll to explore
                </span>
                <svg
                    className="w-5 h-5 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </a>
        </section>
    )
}

export default Hero
