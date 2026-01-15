import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaPython,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiFastapi,
    SiDjango,
    SiMongodb,
    SiMysql,
    SiPostman,
} from "react-icons/si";

const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "FastAPI", icon: <SiFastapi color="#05998B" /> },
    { name: "Django", icon: <SiDjango color="#092E20" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="#181717" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
];

const SkillsMarquee = () => {
    return (
        <section id="skills" className="py-5 bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-24">

                <h1 className='text-4xl sm:text-5xl font-extrabold my-5 text-center'>SKILLS & <span className='text-purple-500'>TECH</span></h1>
                <p className="text-gray-300 max-w-xl mb-8 text-center">
                    Technologies I use to build scalable, production-ready web applications.
                </p>

                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {[...skills, ...skills].map((skill, index) => (
                            <div key={index} className="marquee-card">
                                <span className="icon">{skill.icon}</span>
                                <span className="label">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SkillsMarquee;