import React, { useState } from "react";

const BlogCard = ({ blog }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const wordCount = blog.content?.trim().split(/\s+/).length || 0;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    return (
        <article className="
            w-[95%] md:w-[80%] lg:w-[60%] group relative flex flex-col mb-8 overflow-hidden transition-all duration-500 bg-transparent border-b border-gray-500">

            {/* Top shimmer line */}
            <div className="" />

            <div className="p-6 md:p-9 flex flex-col gap-3">

                {/* Meta row — ALWAYS visible */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium tracking-widest uppercase
                    text-gray-400 dark:text-zinc-500">
                    <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        {blog.author}
                    </span>
                    <span className="text-purple-400 dark:text-purple-500/50">·</span>
                    <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {blog.date}
                    </span>
                    <span className="text-purple-400 dark:text-purple-500/50">·</span>
                    <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {readingTime} min read
                    </span>
                </div>

                {/* Title — ALWAYS visible, theme-aware */}
                <h2 className="text-2xl md:text-3xl font-bold leading-snug transition-colors duration-300
                    text-purple-500 ">
                    {blog.title}
                </h2>

                {/* Content — only when expanded */}
                {isExpanded && (
                    <p className="text-sm md:text-[0.9rem] leading-[1.85] animate-fadeIn
                        text-gray-600 dark:text-zinc-400">
                        {blog.content}
                    </p>
                )}

                {/* Footer */}
                <div className={`flex items-center justify-between ${isExpanded ? "pt-3 border-t border-gray-200 dark:border-white/[0.05]" : ""}`}>

                    {/* Tags — only when expanded */}
                    {isExpanded && (
                        <div className="flex gap-2 flex-wrap animate-fadeIn">
                            {blog.tags?.slice(0, 3).map((tag, i) => (
                                <span key={i} className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full
                                    bg-purple-100 text-purple-600 border border-purple-200
                                    dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Toggle button — always visible */}
                    <button
                        onClick={() => setIsExpanded(prev => !prev)}
                        className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 active:scale-95 ml-auto
                            text-purple-500 hover:text-purple-400
                            dark:text-purple-400 dark:hover:text-purple-300"
                        aria-expanded={isExpanded}
                    >
                        <span>{isExpanded ? "Collapse" : "Read more"}</span>
                        <svg
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

            </div>
        </article>
    );
};

export default BlogCard;
