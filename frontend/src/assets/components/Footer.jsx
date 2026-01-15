import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-950 border-t border-purple-500 mt-10">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-24 py-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Vipin Nawal
                        </h2>
                        <p className="text-sm text-gray-300 mt-2 max-w-sm">
                            Full-Stack Web Developer focused on building clean, scalable, and
                            user-friendly web applications.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-6 text-sm font-medium text-gray-300 ">
                        <a href="#about" className="hover:decoration hover:underline hover:underline-offset-2 transition ">
                            About
                        </a>
                        <a href="#projects" className="hover:decoration hover:underline hover:underline-offset-2 transition ">
                            Projects
                        </a>
                        <a href="#services" className="hover:decoration hover:underline hover:underline-offset-2 transition ">
                            Services
                        </a>
                        <a href="#contact" className="hover:decoration hover:underline hover:underline-offset-2 transition ">
                            Contact
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-200"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
                    <p>
                        © {new Date().getFullYear()} Vipin Nawal. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-5">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:decoration hover:underline hover:underline-offset-2 transition "
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:decoration hover:underline hover:underline-offset-2 transition "
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:your-email@example.com"
                            className="hover:decoration hover:underline hover:underline-offset-2 transition "
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
