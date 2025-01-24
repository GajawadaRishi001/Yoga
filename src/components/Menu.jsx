import React, { useRef, useState, useEffect, createRef } from "react";
import { gsap } from "gsap"; // Import GSAP
import "./Menu.css";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

const Menu = ({ setCurrentPage, cartCount }) => {
  const menuRef = useRef();
  const indicatorRef1 = useRef();
  const indicatorRef2 = useRef();
  const items = [
    { name: "Home", color: "#f44336", action: () => setCurrentPage("home") },
    { name: "Events", color: "#e91e63", action: () => setCurrentPage("events") },
    { name: "Cart", color: "#9c27b0", action: () => setCurrentPage("cart") },
    { name: "Blog", color: "#03a9f4", action: () => setCurrentPage("blog") }, // New Blog menu item
  ];

  const itemRefs = useRef(items.map(createRef));
  const [activeIndex, setActiveIndex] = useState(0);

  const animateIndicator = () => {
    const menuOffset = menuRef.current.getBoundingClientRect();
    const activeItem = itemRefs.current[activeIndex].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[activeIndex].color,
      ease: "elastic.out(.7, .7)",
      duration: 0.8,
    };

    gsap.to(indicatorRef1.current, { ...settings });
    gsap.to(indicatorRef2.current, { ...settings, duration: 1 });
  };

  useEffect(() => {
    animateIndicator();
    window.addEventListener("resize", animateIndicator);

    return () => {
      window.removeEventListener("resize", animateIndicator);
    };
  }, [activeIndex]);

  return (
    <div className="menu" ref={menuRef}>
      <SelfImprovementIcon className="menu-icon" />
      <div className="menu-items">
        {items.map((item, index) => (
          <a
            key={item.name}
            ref={itemRefs.current[index]}
            className={`menu-item ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => {
              setActiveIndex(index);
              item.action();
            }}
          >
            {item.name} {item.name === "Cart" && cartCount > 0 && `(${cartCount})`}
          </a>
        ))}
      </div>
      <div ref={indicatorRef1} className="indicator" />
      <div ref={indicatorRef2} className="indicator" />
    </div>
  );
};

export default Menu;
