import React from "react";

const ArticleView = ({ blog }) => {
    const wordCount = blog.content?.trim().split(/\s+/).length || 0;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    return (
        <article className="max-w-2xl mx-auto animate-fadeIn">

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium tracking-widest uppercase mb-5
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

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5
                text-purple-500">
                {blog.title}
            </h1>

            {/* Purple accent divider */}
            <div className="h-px w-full bg-gradient-to-r from-purple-500/60 via-purple-500/20 to-transparent mb-7" />

            {/* Content */}
            <p className="leading-[1.95] text-[0.95rem]
                text-gray-600 dark:text-zinc-400">
                {blog.content}
            </p>

            {/* Tags */}
            {blog.tags?.length > 0 && (
                <div className="flex gap-2 flex-wrap mt-8 pt-6 border-t
                    border-gray-100 dark:border-white/[0.05]">
                    {blog.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full
                            bg-purple-100 text-purple-600 border border-purple-200
                            dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </article>
    );
};

export default ArticleView;
