import React from 'react'

const EXPERIENCE = [
    {
        role: "FULL-STACK DEVELOPER — WEBENTRIC",
        period: "Present",
        org: "Freelance / Independent",
        points: [
            "Build and deliver modern, responsive websites and full-stack web applications for clients and businesses.",
            "Handle projects end-to-end, including requirements, UI/UX implementation, frontend development, backend architecture, database integration, testing, deployment, and maintenance.",
            "Develop backend systems and REST APIs using Python, FastAPI, and Django.",
            "Build modern frontend experiences using React, JavaScript, and Tailwind CSS.",
            "Integrate and manage relational databases and backend services using PostgreSQL, SQL, and Supabase.",
            "Work directly with clients to translate business requirements into practical digital products.",
            "Focus on performance, responsive design, maintainability, scalability, and production-ready implementation.",
            "Manage the complete development lifecycle from initial concept through deployment.",
        ],
    },
    {
        role: "FULL-STACK DEVELOPER INTERN — UNIFIED MENTOR",
        period: "January 2024 – December 2024",
        org: "Internship",
        points: [
            "Built and maintained full-stack web applications using Python, FastAPI, Django, and React.",
            "Developed and integrated RESTful APIs for application functionality and data flow.",
            "Worked with SQL-based databases and backend services including Supabase.",
            "Developed responsive interfaces using React, JavaScript, and Tailwind CSS.",
            "Implemented backend logic, database operations, API integrations, and frontend functionality.",
            "Used Git and collaborative development workflows for version control and project development.",
            "Participated in debugging, testing, deployment, and maintenance of web applications.",
            "Worked across frontend and backend layers to deliver complete application features.",
        ],
    },
];

const SKILL_GROUPS = [
    { title: "Languages", skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"] },
    { title: "Backend", skills: ["FastAPI", "Django", "REST APIs", "API Development", "Backend Architecture"] },
    { title: "Frontend", skills: ["React", "JavaScript", "Tailwind CSS", "Responsive Web Design"] },
    { title: "Databases & Backend Services", skills: ["PostgreSQL", "SQL", "Supabase", "Database Design", "CRUD Operations"] },
    { title: "Development Tools", skills: ["Git", "GitHub", "API Testing", "Deployment", "Debugging"] },
    { title: "Development Practices", skills: ["RESTful Architecture", "Clean Code", "Modular Architecture", "Responsive Design", "Scalability", "Performance Optimization"] },
];

const PROJECTS = [
    {
        name: "WEBENTRIC",
        subtitle: "Full-Stack Web Development & Digital Solutions",
        description: "A web development initiative focused on creating modern, high-performance websites and web applications for businesses and individuals.",
        tech: ["React", "JavaScript", "Tailwind CSS", "Python", "FastAPI", "Django", "PostgreSQL", "Supabase"],
        highlights: [
            "Designed and developed the Webentric website and digital presence.",
            "Built a modern, responsive interface focused on conversion and user experience.",
            "Developed reusable frontend components and structured application architecture.",
            "Integrated backend services, APIs, and database functionality.",
            "Focused on delivering production-ready websites rather than template-based implementations.",
        ],
    },
    {
        name: "HUSTLE LEARNING",
        subtitle: "Educational Web Platform",
        description: "An educational web platform focused on delivering structured learning experiences.",
        tech: ["Python", "Django/FastAPI", "React", "SQL"],
        highlights: [
            "Implemented backend functionality and database-driven features.",
            "Built responsive frontend interfaces for students.",
            "Worked across frontend, backend, API, and database layers.",
        ],
    },
    {
        name: "PERSONAL PORTFOLIO",
        subtitle: "Full-Stack Developer Portfolio",
        description: "A personal developer portfolio showcasing technical skills, projects, experience, and services.",
        tech: ["React", "JavaScript", "Tailwind CSS"],
        highlights: [
            "Created a modern dark-themed interface with responsive layouts and interactive elements.",
            "Focused on presenting technical capabilities and projects through a polished user experience.",
        ],
    },
];

const STRENGTHS = [
    { title: "Full-Stack Development", text: "Build complete applications across frontend, backend, APIs, databases, and deployment." },
    { title: "Backend Engineering", text: "Strong focus on Python, FastAPI, Django, REST APIs, database architecture, and scalable backend systems." },
    { title: "Frontend Development", text: "Modern interfaces using React, JavaScript, Tailwind CSS, and responsive design principles." },
    { title: "Problem Solving", text: "Engineering-oriented approach to breaking down requirements and building practical solutions." },
    { title: "Client-Focused Development", text: "Experience taking projects from requirements and design through development, testing, and deployment." },
    { title: "Product Thinking", text: "Focus on usability, performance, maintainability, and the actual business purpose of the software — not just writing code." },
];

const SectionLabel = ({ children }) => (
    <h2 className="font-mono text-[11px] sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-purple-600 dark:text-purple-400 mb-6 sm:mb-8">
        {children}
    </h2>
);

const ResumeSection = () => {
    return (
        <section id="resume" className="relative overflow-hidden scroll-mt-24 px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
            <div className="w-full max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-start text-left mb-14 sm:mb-20">
                    <p className="font-mono text-[11px] sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-purple-600 dark:text-purple-400 mb-4 sm:mb-6">
                        My Resume
                    </p>
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-[1.15] mb-4 sm:mb-6 max-w-3xl">
                        Full-Stack Developer — building{" "}
                        <span className="text-purple-500">scalable systems</span>{" "}
                        & modern digital experiences.
                    </h2>
                    <p className="font-mono text-xs sm:text-sm text-gray-500 dark:text-gray-400 tracking-wider">
                        FULL-STACK DEVELOPER | PYTHON · FASTAPI · DJANGO · REACT
                    </p>
                </div>

                {/* Summary */}
                <div className="mb-14 sm:mb-20">
                    <SectionLabel>Summary</SectionLabel>
                    <div className="rounded-2xl border border-purple-500/25 bg-white dark:bg-white/[0.02] p-6 sm:p-8 shadow-sm">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3">VIPIN</h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            Full-Stack Developer specializing in Python backend development and modern
                            frontend engineering. Experienced in building scalable, responsive web
                            applications using FastAPI, Django, React, JavaScript, PostgreSQL/SQL, and
                            Tailwind CSS. Strong focus on clean architecture, maintainable code, REST APIs,
                            database integration, deployment, and practical user experiences. Currently
                            building and delivering production-ready websites and web applications through
                            freelance development and Webentric.
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            <li>• New Delhi – 110063, India</li>
                            <li>• (+91) 8851948143</li>
                            <li>• vn.nawal02@gmail.com</li>
                        </ul>
                    </div>
                </div>

                {/* Experience */}
                <div className="mb-14 sm:mb-20">
                    <SectionLabel>Professional Experience</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {EXPERIENCE.map((job) => (
                            <div
                                key={job.role}
                                className="relative rounded-2xl border border-purple-500/25 bg-white dark:bg-white/[0.02] p-6 sm:p-8 shadow-sm"
                            >
                                <div className="absolute top-6 sm:top-8 left-0 w-1 h-10 rounded-r bg-purple-500" />
                                <h3 className="font-bold text-base sm:text-lg leading-snug mb-1">{job.role}</h3>
                                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{job.period}</p>
                                <p className="italic text-sm text-gray-500 dark:text-gray-400 mb-4">{job.org}</p>
                                <ul className="list-disc ml-5 space-y-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {job.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-14 sm:mb-20">
                    <SectionLabel>Technical Skills</SectionLabel>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {SKILL_GROUPS.map((group) => (
                            <div key={group.title}>
                                <h3 className="font-bold text-sm sm:text-base mb-3">{group.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="font-mono text-xs px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 dark:bg-purple-500/10 text-gray-700 dark:text-gray-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div className="mb-14 sm:mb-20">
                    <SectionLabel>Projects</SectionLabel>
                    <div className="space-y-6 sm:space-y-8">
                        {PROJECTS.map((project) => (
                            <div
                                key={project.name}
                                className="rounded-2xl border border-purple-500/25 bg-white dark:bg-white/[0.02] p-6 sm:p-8 shadow-sm"
                            >
                                <h3 className="font-bold text-base sm:text-lg">{project.name}</h3>
                                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">{project.subtitle}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="font-mono text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.highlights.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strengths */}
                <div className="mb-14 sm:mb-20">
                    <SectionLabel>Core Strengths</SectionLabel>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {STRENGTHS.map((s) => (
                            <div
                                key={s.title}
                                className="rounded-2xl border border-purple-500/25 bg-white dark:bg-white/[0.02] p-6 shadow-sm hover:border-purple-500 transition-colors duration-200"
                            >
                                <h3 className="font-bold text-sm sm:text-base mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="mb-14 sm:mb-20">
                    <SectionLabel>Education</SectionLabel>
                    <div className="relative pl-6 border-l-2 border-purple-500 max-w-2xl">
                        <div className="absolute -left-[7px] top-1 w-3 h-3 bg-white dark:bg-gray-900 border-2 border-purple-500 rounded-full" />
                        <h3 className="font-bold text-base sm:text-lg">HIGH SCHOOL</h3>
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">2008 – 2020</p>
                        <p className="italic text-sm text-gray-500 dark:text-gray-400">
                            St. Matthew&apos;s Public School, Paschim Vihar, New Delhi
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                            Non-Medical stream with Mathematics and Science.
                        </p>
                    </div>
                </div>

                {/* Positioning + CTA */}
                <div className="flex flex-col items-start text-left">
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-8">
                        Full-Stack Developer building{" "}
                        <span className="text-purple-500 font-semibold">scalable backend systems</span>{" "}
                        and polished frontend experiences.
                    </p>
                    <a href="https://drive.usercontent.google.com/u/0/uc?id=1YOwElvVv8NZGBQSUvfGOqffXLJ8rqABD&export=download">
                        <button className="px-8 py-3.5 rounded-sm bg-purple-600 hover:bg-purple-500 text-white font-semibold transition duration-200 hover:shadow-purple-400 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)]">
                            DOWNLOAD RESUME
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
