import React, { useState } from "react";

const BlogCard = ({ blog }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleArticleHeight() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className='w-[95%] md:w-[80%] lg:w-[65%] flex flex-col mb-8 border-2 rounded-sm md:p-10 p-5 border-purple-500/30 bg-gradient-to-br from-purple-50/5 to-transparent hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20'>
            <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-purple-500 hover:text-purple-400 transition-colors">
                    {blog.title}
                </h1>
                <div className="flex gap-4 text-sm italic text-gray-400">
                    <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        {blog.author}
                    </span>
                    <span className="text-purple-500">•</span>
                    <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {blog.date}
                    </span>
                </div>
            </div>

            <div className="relative">
                <p
                    className={`${isExpanded ? 'h-auto' : 'h-[10vh]'} overflow-hidden transition-all duration-500 text-gray-300 leading-relaxed text-lg md:text-base`}
                    id='content'
                >
                    {blog.content}
                </p>

                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-16  pointer-events-none"></div>
                )}

                <button
                    onClick={toggleArticleHeight}
                    className="font-semibold text-center text-base md:text-lg cursor-pointer mt-6 px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 active:scale-95 flex items-center gap-2 mx-auto"
                >
                    {isExpanded ? (
                        <>
                            Show less
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </>
                    ) : (
                        <>
                            Read full article
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
