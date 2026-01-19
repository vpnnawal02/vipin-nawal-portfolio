import React, { useState } from "react";
import Projectcard from "../utils/ProjectCard";
import hustle_learning from "../imgs/project_images/hustle_learning.png";
import cafe_website from "../imgs/project_images/cafe_website.png";
import gymshala from "../imgs/project_images/gymshala.png";
import shoe_shopping from "../imgs/project_images/shoe_shopping.png";
import per_capita from "../imgs/project_images/per_capita.png"
import notary from "../imgs/project_images/notary.png"
import salon from "../imgs/project_images/salon.png"

const projectsData = [
    {
        id: "edtech",
        name: "ED-TECH WEBSITE",
        image: hustle_learning,
        description:
            "A modern EdTech platform built for clear learning and seamless user experience",
        ts1: "HTML",
        ts2: "CSS",
        ts3: "Javascript",
        ts4: "Tailwind",
        ts5: "Bootstrap",
        ts6: "Render",
        github_link: 'https://github.com/vpnnawal02/hustleLearning.in',
        live_link: 'https://hustlelearning-in-0kjy.onrender.com/',
        category: "Full-Stack",
    },
    {
        id: "ovenkissed",
        name: "OVENKISSED - CAFE",
        image: cafe_website,
        description:
            "A modern café website featuring an elegant UI, table booking functionality, and a smooth customer experience built with scalable web technologies.",
        ts1: "ReactJS",
        ts2: "Vite",
        ts3: "CSS/Tailwind",
        ts4: "FastAPI",
        ts5: "CORS",
        ts6: "Render/Netlify",
        github_link: 'https://github.com/vpnnawal02/ovenkissed-cats-cafe',
        live_link: 'https://frabjous-elf-35e678.netlify.app/',
        category: "Full-Stack",
    },
    {
        id: "gymshala",
        name: "GYMSHALA - GYM WEBSITE",
        image: gymshala,
        description:
            "A gym web application demonstrating clean UI design, responsive layouts, and real-world business functionality.",
        ts1: "HTML",
        ts2: "CSS",
        ts3: "Javascript",
        ts4: "Flask",
        ts5: "Render",
        ts6: "Python",
        github_link: 'https://github.com/vpnnawal02/gymshala-static-website',
        live_link: 'https://gymshala-static-website.onrender.com/',
        category: "Full-Stack",
    },
    {
        id: "salon",
        name: "SALON",
        image: salon,
        description: "A modern Salon website with a booking form.",
        ts1: 'ReactJS',
        ts2: 'Tailwind',
        ts3: 'FastAPI',
        ts4: 'UX/UI',
        ts5: 'Python',
        ts6: 'Netlify',
        github_link: "https://github.com/vpnnawal02/salon-landing-page",
        live_link: "https://vipin-salon.netlify.app/",
        category: "Full-Stack",
    },
    {
        id: "shoeshopping",
        name: "SHOE-SHOPPING",
        image: shoe_shopping,
        description: "A modern shoe shopping website with a clean, user-friendly design.",
        ts1: "HTML",
        ts2: "CSS",
        ts3: "Javascript",
        ts4: "UX/UI",
        ts5: "Github",
        ts6: "Design",
        github_link: 'https://github.com/vpnnawal02/shoes-shopping-website',
        live_link: 'https://vpnnawal02.github.io/shoes-shopping-website/',
        category: "Frontend",
    },
    {
        id: "indiapercapita",
        name: "INDIAN-ECONOMY-ANALYSIS",
        image: per_capita,
        description: "Analysed Indian economy to per capita income of the Country.",
        ts1: "Python",
        ts2: "Matplotlib",
        ts3: "Numpy",
        ts4: "Pandas",
        ts5: "Github",
        ts6: "Image Generation",
        github_link: "https://github.com/vpnnawal02/Indian-Economy-Analysis",
        live_link: "https://github.com/vpnnawal02/Indian-Economy-Analysis",
        category: "Others",
    },
    {
        id: "notary",
        name: "NOTARY - BOOK READINGG",
        image: notary,
        description: "Created a book reading website with the features of searching and counting words.",
        ts1: "HTML",
        ts2: "CSS",
        ts3: "Javascript",
        ts4: "UI/UX",
        ts5: "Github",
        ts6: "Github Pages",
        github_link: "https://github.com/vpnnawal02/book-reading-website",
        live_link: "https://vpnnawal02.github.io/book-reading-website/",
        category: "Frontend",
    },
];

const categories = ["All", "Frontend", "Full-Stack", "Others"];

const AllProjects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projectsData
            : projectsData.filter(
                (project) => project.category === activeCategory
            );

    return (
        <div className="pt-20">
            <center>
                <h1 className="text-5xl font-extrabold my-10">
                    ALL <span className="text-purple-500">PROJECTS</span>
                </h1>
            </center>

            {/* Filters */}
            <div className="flex justify-center gap-2 mb-14 md:gap-4 ">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm transition ${activeCategory === category
                            ? "bg-purple-500 text-white"
                            : "border border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6 md:gap-10 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
                {filteredProjects.map((project) => (
                    <Projectcard
                        key={project.id}
                        {...project}
                    />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500">
                        No projects found in this category.
                    </p>
                </div>
            )}
        </div>
    );
};

export default AllProjects;
