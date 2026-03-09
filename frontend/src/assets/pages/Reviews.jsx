import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import Title from "../utils/Title";

const reviews = [
    {
        name: "Neha Kapoor",
        role: "Business Owner",
        text: "Working with Vlolipin was a smooth and professional experience from start to finish. He understood our requirements clearly and delivered a clean, modern website that perfectly matched our brand. Communication was consistent, and changes were implemented quickly. Highly recommended.",
        rating: 4,
    },
    {
        name: "Rohan Verma",
        role: "Startup Founder",
        text: "Vipin has strong technical skills and a great eye for design. He not only built our website but also suggested improvements that enhanced user experience. The final result was fast, responsive, and visually appealing. We are very satisfied with his work.",
        rating: 5,
    },
    {
        name: "Aarav Sharma",
        role: "Product Manager",
        text: "What stood out most was Vipin's dedication to quality. He paid attention to small details and ensured everything worked flawlessly before delivery. He explained the technical aspects in simple terms and was always available for support.",
        rating: 5,
    },
    {
        name: "Simran Kaur",
        role: "E-commerce Client",
        text: "We hired Vipin for a complete website solution, and he exceeded our expectations. The project was delivered on time, with clean code and a professional layout. He is reliable, skilled, and easy to work with.",
        rating: 5,
    },
    {
        name: "Rahav",
        role: "Freelance Client",
        text: "Vipin transformed our ideas into a fully functional and modern website. His problem-solving approach and willingness to accommodate feedback made the entire process stress-free. We would definitely work with him again for future projects.",
        rating: 3,
    },
];

const Reviews = () => {
    return (
        <section id="reviews" className="flex flex-col items-center my-24 px-6 gap-12">

            {/* Heading */}
            <div className="text-center">
                <Title text_1="CLIENT" text_2="REVIEWS" />
                <p className="mt-3 text-lg lg:text-xl text-gray-300">
                    What people say about working with me
                </p>
            </div>

            {/* All Reviews Grid */}
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, i) => {
                    const initials = review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase();

                    return (
                        <div
                            key={i}
                            className="flex flex-col gap-4 bg-[#111111] border border-purple-500/40 hover:border-purple-500 rounded-sm p-6 transition-all duration-300 hover:scale-115"
                        >
                            {/* Quote Icon */}
                            <FaQuoteLeft className="text-purple-500/40 text-2xl" />

                            {/* Stars */}
                            <div className="flex gap-1 text-lg">
                                {[...Array(5)].map((_, s) =>
                                    s < review.rating ? (
                                        <FaStar key={s} className="text-purple-500" />
                                    ) : (
                                        <FaRegStar key={s} className="text-purple-500/30" />
                                    )
                                )}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-300 text-sm leading-relaxed flex-1">
                                "{review.text}"
                            </p>

                            {/* Divider */}
                            <div className="border-t border-purple-500/20" />

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300 text-sm font-bold shrink-0">
                                    {initials}
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">{review.name}</p>
                                    <p className="text-gray-500 text-xs">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default Reviews;
