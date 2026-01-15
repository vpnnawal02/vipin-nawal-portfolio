import React from 'react'

const ResumeSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12" id='resume'>
            <center><h1 className='text-5xl font-extrabold my-10'>MY <span className='text-purple-500'>RESUME</span></h1></center>

            <div className="grid md:grid-cols-2 gap-12">

                {/* LEFT COLUMN */}
                <div className="space-y-10">

                    {/* Summary */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Summary</h2>
                        <div className="relative pl-6 border-l-2 border-purple-500">
                            <div className="absolute -left-1.75 top-1 w-3 h-3 bg-white border-2 border-purple-500 rounded-full"></div>
                            <h3 className="font-bold">VIPIN</h3>
                            <p className="text-sm text-gray-300 mt-2">
                                Full-Stack Developer with strong expertise in Python backend development and modern frontend technologies. Experienced in building scalable, user-centric web applications using FastAPI, Django, React, and SQL. Adept at writing clean, maintainable code and continuously learning to deliver reliable and high-performance solutions.
                            </p>
                            <ul className="text-sm text-gray-300 mt-3 space-y-1">
                                <li>• New Delhi - 110063, India</li>
                                <li>• (+91) 8851948143</li>
                                <li>• vn.nawal02@gmail.com</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Education</h2>

                        {/* Item 1 */}
                        <div className="relative pl-6 border-l-2 border-purple-500 mb-6">
                            <div className="absolute -left-[7px] top-1 w-3 h-3 bg-white border-2 border-purple-500 rounded-full"></div>
                            <h3 className="font-bold">
                                MECHANICAL ENGINEERING
                            </h3>
                            <p className="text-sm text-purple-500 font-medium">2021 - 2022</p>
                            <p className="italic text-sm text-gray-300">
                                Delhi Technological University, Delhi, India
                            </p>
                            <p className="text-sm text-gray-300 mt-2">
                                During my Mechanical Engineering studies, I developed a strong interest in problem-solving and automation, which led me to explore software development. This curiosity evolved into hands-on experience with Python, backend systems, and web technologies, ultimately shaping my transition into full-stack development.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="relative pl-6 border-l-2 border-purple-500">
                            <div className="absolute -left-[7px] top-1 w-3 h-3 bg-white border-2 border-purple-500 rounded-full"></div>
                            <h3 className="font-bold">
                                HIGH SCHOOL
                            </h3>
                            <p className="text-sm text-purple-500 font-medium">2008 - 2020</p>
                            <p className="italic text-sm text-gray-300">
                                St. Matthew's Public School, Paschim Vihar, New Delhi, India
                            </p>
                            <p className="text-sm text-gray-300 mt-2">
                                Completed high school in the Non-Medical stream with a strong foundation in Mathematics and Science, developing analytical thinking and problem-solving skills that later supported a transition into engineering and technology.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-10">

                    {/* Professional Experience */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Professional Experience
                        </h2>

                        {/* Experience 1 */}
                        <div className="relative pl-6 border-l-2 border-purple-500 mb-6">
                            <div className="absolute -left-[7px] top-1 w-3 h-3 bg-white border-2 border-purple-500 rounded-full"></div>
                            <h3 className="font-bold">
                                FULL STACK DEVELOPER INTERN
                            </h3>
                            <p className="text-sm text-purple-500 font-medium">January 2024 - December 2024</p>
                            <p className="italic text-sm text-gray-300">
                                UNIFIED MENTOR
                            </p>
                            <ul className="list-disc ml-5 mt-2 text-sm text-gray-300 space-y-1">
                                <li>
                                    Built and maintained full-stack web applications using Python (FastAPI/Django) and React, focusing on clean architecture and scalability.
                                </li>
                                <li>
                                    Designed and integrated RESTful APIs, managed databases (SQL/Supabase), and handled backend logic and data flow.
                                </li>
                                <li>
                                    Developed responsive user interfaces with modern frontend tools including Tailwind CSS and JavaScript.
                                </li>
                                <li>
                                    Gained hands-on experience in debugging, version control (Git), deployment, and collaborative development workflows.
                                </li>
                            </ul>
                        </div>

                        {/* Experience 2 */}
                        <div className="relative pl-6 border-l-2 border-purple-500">
                            <div className="absolute -left-[7px] top-1 w-3 h-3 bg-white border-2 border-purple-500 rounded-full"></div>
                            <h3 className="font-bold">
                                FULL STACK DEVELOPMENT
                            </h3>
                            <p className="text-sm text-purple-500 font-medium">present</p>
                            <p className="italic text-sm text-gray-300">
                                Freelancing
                            </p>
                            <ul className="list-disc ml-5 mt-2 text-sm text-gray-300 space-y-1">
                                <li>
                                    Delivered multiple freelance web projects end-to-end, handling requirement gathering, design, development, testing, and deployment.
                                </li>
                                <li>
                                    Built scalable backend systems using Python (FastAPI/Django) and integrated databases such as SQL and Supabase.
                                </li>
                                <li>
                                    Developed responsive, user-focused frontend interfaces with React, JavaScript, and Tailwind CSS.
                                </li>
                                <li>
                                    Collaborated directly with clients to implement feedback, optimize performance, and deliver reliable, production-ready solutions.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <center>
                <a href="https://drive.usercontent.google.com/u/0/uc?id=1YOwElvVv8NZGBQSUvfGOqffXLJ8rqABD&export=download">
                    <button className='border-purple-500 border-2 py-2 px-2 rounded-sm text-white my-5 shadow-md hover:cursor-pointer hover:bg-purple-500 transition duration-200 hover:shadow-purple-400  hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)]'>DOWNLOAD RESUME
                    </button>
                </a>
            </center>

        </section>
    );
};

export default ResumeSection;
