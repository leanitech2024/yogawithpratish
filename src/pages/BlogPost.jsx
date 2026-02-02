import React, { useEffect } from "react";
import BlogDetails from "../components/Blog/BlogDetails";

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-16 bg-white min-h-screen">
      <BlogDetails />
    </div>
  );
};

export default BlogPost;
