import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop, formatDate } from "../../utils/helpers";

const BlogCard = ({ blog }) => {
  // Format date from created_at if date is not present
  const dateFormatted = blog.date || formatDate(blog.created_at || Date.now());
  const categories = blog.categories || blog.tags || [];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <span>{dateFormatted}</span>
          <span>•</span>
          <div className="flex gap-2">
            {categories.slice(0, 2).map((cat, i) => (
              <span key={i} className="text-[#b48821]">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#b48821] transition-colors">
          {blog.title}
        </h3>

        {blog.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
        )}

        <Link
          to={`/blogs/${blog.slug}`}
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-full font-medium transition-colors no-underline"
        >
          Read Article
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
