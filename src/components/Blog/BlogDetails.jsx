import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "../../database/blogData";
import BlogContentRenderer from "./BlogContentRenderer";
import { scrollToTop, formatDate } from "../../utils/helpers";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const data = await getBlogBySlug(slug);
        setBlog(data);
        scrollToTop();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 lg:p-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b48821]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h1>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 bg-[#b48821] hover:bg-[#8e6b1a] text-white px-6 py-3 rounded-full transition"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Format date and categories/tags
  const dateFormatted = blog.date || formatDate(blog.created_at || Date.now());
  const categories = blog.categories || blog.tags || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-64 sm:h-80 lg:h-96 bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src={blog.image}
          alt="Header Background"
          className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50"
        />

        <div className="relative z-20 text-center text-white px-4 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {blog.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-3 text-sm sm:text-base">
            <span className="font-medium text-amber-600">By {blog.author}</span>
            <span className="text-gray-400">|</span>
            <span>{dateFormatted}</span>
            <span className="text-gray-400">|</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <span key={i} className="bg-white/20 px-3 py-1 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-10">
        <article className="relative max-w-4xl mx-auto overflow-hidden bg-white">
          {/* Paper Background Texture */}
          <div className="absolute inset-0 bg-[url('/paper-texture.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>

          {/* MAIN CONTENT */}

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover mb-6 rounded"
          />
          <div className="relative p-6 pt-0 sm:p-10 backdrop-blur-sm">
            {/* Blog Image */}

            {/* Render Dynamic Content */}
            <BlogContentRenderer content={blog.content} />

            {/* Back Button */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <Link
                to="/blogs"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium underline transition-colors"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to All Blogs
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogDetails;
