import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { getBlogs } from "../../database/blogData";
import { scrollToTop } from "../../utils/helpers";

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 9;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        // Sort by created_at descending (newest first)
        const sortedData = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at),
        );
        setBlogs(sortedData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const currentPosts = blogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  const paginate = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 lg:p-16">
        <div className="container mx-auto">
          <header className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto animate-pulse"></div>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="bg-gray-200 rounded-xl h-96 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-16">
      <div className="container mx-auto">
        {/* Heading */}
        {/* Heading */}
        <header className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Wisdom & Wellness
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of articles on yoga, mindfulness, and
            holistic living. Designed to inspire your practice and nourish your
            soul.
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="flex justify-center mt-12 gap-2 flex-wrap">
            {/* Prev */}
            <button
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
              className={`px-4 py-2 rounded-lg flex items-center gap-1 text-sm ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </button>

            {/* Numbers */}
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => paginate(idx + 1)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  currentPage === idx + 1
                    ? "bg-[#b48821] text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {idx + 1}
              </button>
            ))}

            {/* Next */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => paginate(currentPage + 1)}
              className={`px-4 py-2 rounded-lg flex items-center gap-1 text-sm ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Next
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
};

export default BlogCards;
