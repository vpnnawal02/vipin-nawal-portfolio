import React, { useState, useEffect } from "react";
import blogData from "../blogData";
import ArticleView from "../components/ArticleView";

const BlogList = () => {
    const sorted = [...blogData].reverse();
    const [selectedId, setSelectedId] = useState(sorted[0]?.id ?? null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const selectedBlog = sorted.find(b => b.id === selectedId);

    // Close drawer when resizing to desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setDrawerOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Lock body scroll when drawer is open on mobile
    useEffect(() => {
        document.body.style.overflow = drawerOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [drawerOpen]);

    const handleSelect = (id) => {
        setSelectedId(id);
        setDrawerOpen(false);
    };

    return (
        <div className="flex h-screen overflow-hidden pt-16">

            {/* ── Mobile backdrop — starts below navbar ── */}
            <div
                onClick={() => setDrawerOpen(false)}
                className={`
                    fixed top-16 left-0 right-0 bottom-0 z-40 bg-black/50 backdrop-blur-sm
                    transition-opacity duration-300 md:hidden
                    ${drawerOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"}
                `}
            />

            {/* ── Sidebar ── */}
            <aside className={`
                z-50 flex flex-col border-r border-t overflow-hidden w-72 shrink-0
                border-gray-200 dark:border-white/[0.06]
                transition-transform duration-300 ease-in-out

                fixed top-20 left-0 h-[calc(100vh-4rem)]
                md:static md:h-full md:translate-x-0 md:border-t-0

                ${drawerOpen ? "translate-x-0" : "-translate-x-full"}

                bg-white dark:bg-zinc-950
                md:bg-transparent md:dark:bg-transparent
            `}>

                {/* Sidebar header */}
                <div className="px-5 py-4 border-b shrink-0 flex items-center justify-between
                    border-gray-200 dark:border-white/[0.06]">
                    <div>
                        <h2 className="text-base font-bold
                            text-gray-900 dark:text-white">
                            All Articles
                        </h2>
                        <p className="text-[11px] mt-0.5
                            text-black">
                            {sorted.length} posts
                        </p>
                    </div>

                    {/* Close button — mobile only */}
                    <button
                        onClick={() => setDrawerOpen(false)}
                        className="md:hidden p-1.5 rounded-lg transition-colors
                            text-gray-400 hover:text-gray-600 hover:bg-gray-100
                            dark:text-zinc-500 dark:hover:text-zinc-300 dark:hover:bg-white/[0.05]"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Article list */}
                <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
                    {sorted.map((blog) => {
                        const isActive = selectedId === blog.id;
                        return (
                            <button
                                key={blog.id}
                                onClick={() => handleSelect(blog.id)}
                                className={`w-full text-left px-5 py-3.5 transition-all duration-200 border-l-2 ${isActive
                                    ? "border-purple-500 bg-purple-500/5 dark:bg-purple-500/10"
                                    : "border-transparent hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                                    }`}
                            >
                                <p className={`text-[13px] font-semibold leading-snug line-clamp-2 ${isActive
                                    ? "text-purple-600 dark:text-purple-400"
                                    : "text-gray-800 dark:text-white/70"
                                    }`}>
                                    {blog.title}
                                </p>
                                <p className="text-[11px] mt-1
                                    text-gray-400 dark:text-zinc-500">
                                    {blog.date}
                                </p>
                            </button>
                        );
                    })}
                </nav>
            </aside>

            {/* ── Article Panel ── */}
            <main className="flex-1 flex flex-col overflow-hidden relative">

                {/* Floating Articles button — mobile only */}
                <button
                    onClick={() => setDrawerOpen(true)}
                    className="md:hidden fixed bottom-6 left-4 z-30
                        flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg
                        text-sm font-semibold transition-all duration-200 active:scale-95
                        bg-purple-600 hover:bg-purple-500 text-white
                        dark:bg-purple-500 dark:hover:bg-purple-400"
                    aria-label="Open article list"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    Articles
                </button>

                {/* Scrollable content area */}
                <div className="flex-1 overflow-y-auto px-6 md:px-14 lg:px-20 py-10 pb-24">
                    {selectedBlog
                        ? <ArticleView key={selectedBlog.id} blog={selectedBlog} />
                        : (
                            <div className="flex flex-col items-center justify-center h-full gap-3
                                text-gray-400 dark:text-zinc-600">
                                <svg className="w-10 h-10 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
                                </svg>
                                <p className="text-sm">Select an article to read</p>
                            </div>
                        )
                    }
                </div>
            </main>
        </div>
    );
};

export default BlogList;
