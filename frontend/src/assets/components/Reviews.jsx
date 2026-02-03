import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
    {
        name: "Neha Kapoor",
        text: "Working with Vipin was a smooth and professional experience from start to finish. He understood our requirements clearly and delivered a clean, modern website that perfectly matched our brand. Communication was consistent, and changes were implemented quickly. Highly recommended.",
        rating: 4,
    },
    {
        name: "Rohan Verma",
        text: "Vipin has strong technical skills and a great eye for design. He not only built our website but also suggested improvements that enhanced user experience. The final result was fast, responsive, and visually appealing. We are very satisfied with his work.",
        rating: 5,
    },
    {
        name: "Aarav Sharma",
        text: "What stood out most was Vipin’s dedication to quality. He paid attention to small details and ensured everything worked flawlessly before delivery. He explained the technical aspects in simple terms and was always available for support.",
        rating: 5,
    },
    {
        name: "Simran Kaur",
        text: "We hired Vipin for a complete website solution, and he exceeded our expectations. The project was delivered on time, with clean code and a professional layout. He is reliable, skilled, and easy to work with.",
        rating: 5,
    },
    {
        name: "Rahav",
        text: "Vipin transformed our ideas into a fully functional and modern website. His problem-solving approach and willingness to accommodate feedback made the entire process stress-free. We would definitely work with him again for future projects.",
        rating: 3
    }
];

const Reviews = () => {
    const [index, setIndex] = useState(0);

    const prevReview = () => {
        if (index > 0) setIndex(index - 1);
    };

    const nextReview = () => {
        if (index < reviews.length - 1) setIndex(index + 1);
    };

    return (
        <div id="reviews" className="flex flex-col items-center my-24 gap-10">

            {/* Heading */}
            <div className="text-center">
                <h1 className="text-4xl lg:text-6xl font-bold">
                    Client <span className="text-purple-500">Reviews</span>
                </h1>
                <p className="mt-3 text-lg lg:text-xl text-gray-300">
                    What people say about us
                </p>
            </div>

            {/* Slider Wrapper */}
            <div className="relative w-[90%] sm:w-[80%] lg:w-[50%] overflow-hidden">

                {/* Slides */}
                <div
                    className="flex w-full md:w-[50%] transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {reviews.map((review, i) => (
                        <div key={i} className="min-w-full px-4">
                            <div className="bg-transparent  p-8 rounded-xl text-center border border-purple-500">

                                {/* Stars */}
                                <div className="flex justify-center gap-1 text-purple-500 text-xl mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    “{review.text}”
                                </p>

                                {/* Name */}
                                <h3 className="mt-4  font-semibold">
                                    — {review.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    onClick={prevReview}
                    disabled={index === 0}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full ${index === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-black"}
          `}
                >
                    <FaChevronLeft className="text-white" />
                </button>

                <button
                    onClick={nextReview}
                    disabled={index === reviews.length - 1}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full ${index === reviews.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-black"}`}
                >
                    <FaChevronRight className="text-white" />
                </button>
            </div>
        </div>
    );
};

export default Reviews;