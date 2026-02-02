import React, { useEffect } from "react";
import BlogCards from "../components/Blog/BlogCards";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-0 pb-16 bg-[#ece8e7] min-h-screen">
      <BlogCards />
    </div>
  );
};

export default Blogs;
