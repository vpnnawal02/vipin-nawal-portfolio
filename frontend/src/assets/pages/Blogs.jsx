import React from "react";
import BlogCard from "../utils/BlogCard";
import blogData from "../blogData";

const BlogList = () => {
    return (
        <div className="flex flex-col items-center pt-25 ">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 ">Latest Articles</h1>

            {blogData.reverse().map((blog) => (
                <BlogCard key={blog.id} blog={blog} />

            ))}
        </div>
    );
};

export default BlogList;
