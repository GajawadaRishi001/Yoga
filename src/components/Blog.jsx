import React from "react";
import "./Blog.css";

const blogs = [
  {
    title: "The Benefits of Yoga for Mental Health",
    description:
      "Discover how yoga helps improve mental well-being by reducing stress, improving focus, and enhancing relaxation.Discover how yoga helps improve mental well-being by reducing stress, improving focus, and enhancing relaxation.Discover how yoga helps improve mental well-being by reducing stress, improving focus, and enhancing relaxation.Discover how yoga helps improve mental well-being by reducing stress, improving focus, and enhancing relaxation.Discover how yoga helps improve mental well-being by reducing stress, improving focus, and enhancing relaxation.",
    image: "/images/yogahall.jpg",
  },
  {
    title: "Mastering Balance in Yoga",
    description:
      "Learn about the art of balance in yoga and how it can improve both your physical and mental stability.Learn about the art of balance in yoga and how it can improve both your physical and mental stability.Learn about the art of balance in yoga and how it can improve both your physical and mental stability.Learn about the art of balance in yoga and how it can improve both your physical and mental stability.Learn about the art of balance in yoga and how it can improve both your physical and mental stability.",
    image: "/images/therapyhall.webp",
  },
  {
    title: "Yoga for Beginners: Getting Started",
    description:
      "A guide to help beginners start their yoga journey with simple poses and mindful practices.A guide to help beginners start their yoga journey with simple poses and mindful practices.A guide to help beginners start their yoga journey with simple poses and mindful practices.A guide to help beginners start their yoga journey with simple poses and mindful practices.A guide to help beginners start their yoga journey with simple poses and mindful practices.",
    image: "/images/fitnesshall.jpg",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className={`blog ${index % 2 === 0 ? "blog-even" : "blog-odd"}`}
        >
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-content">
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-description">{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
