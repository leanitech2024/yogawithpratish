import React from "react";
import PropTypes from "prop-types";

const BlogContentRenderer = ({ content }) => {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  return (
    <div className="max-w-none text-gray-800">
      {content.map((item, index) => {
        switch (item.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="mb-8 leading-[1.8] text-[1.1rem] md:text-[1.15rem] text-[#333333]"
              >
                {item.text.split("**").map((part, i) =>
                  i % 2 === 0 ? (
                    part
                  ) : (
                    <strong key={i} className="text-[#b48821] font-bold">
                      {part}
                    </strong>
                  ),
                )}
              </p>
            );

          case "heading": {
            const HeadingTag = `h${item.level || 2}`;
            const headingSizes = {
              2: "text-3xl md:text-4xl",
              3: "text-2xl md:text-3xl",
              4: "text-xl md:text-2xl",
            };

            return (
              <HeadingTag
                key={index}
                className={`${headingSizes[item.level] || "text-2xl"} mt-12 mb-6 font-bold text-[#1a1a1a] tracking-tight`}
              >
                {item.text}
              </HeadingTag>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
};

BlogContentRenderer.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string,
      level: PropTypes.number,
    }),
  ).isRequired,
};

export default BlogContentRenderer;
