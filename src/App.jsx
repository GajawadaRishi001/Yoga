import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Menu from "./components/Menu";
import Carousel from "./components/Carousel";
import Classes from "./components/Classes";
import Team from "./components/Team";
import ContactForm from "./components/ContactForm";
import Events from "./components/Events/Events";
import Cart from "./components/Events/Cart";
import AboutUs from "./components/AboutUs";
import YogaPosters from "./components/YogaPosters";
import Blog from "./components/Blog"; // New Blog Component
import TeamSlider from "./components/TeamSlider";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  const addToCart = (title, subscription) => {
    setCartItems([...cartItems, { title, subscription }]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Menu setCurrentPage={setCurrentPage} cartCount={cartItems.length} />
      {currentPage === "home" && (
        <div>
          <Carousel />
          <div data-aos="fade-up">
            <AboutUs />
          </div>
          <div data-aos="fade-up">
            <YogaPosters />
          </div>
          <div data-aos="fade-up">
            <Classes />
          </div>
          <div data-aos="fade-up">
            <Team />
          </div>
          {/* <div data-aos="fade-up">
            <TeamSlider />
          </div> */}
          <div data-aos="fade-up">
            <ContactForm />
          </div>
        </div>
      )}
      {currentPage === "events" && <Events addToCart={addToCart} />}
      {currentPage === "cart" && (
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      )}
      {currentPage === "blog" && <Blog />}
    </div>
  );
};

export default App;
