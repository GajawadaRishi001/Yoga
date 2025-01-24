import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  const [isPaymentFormVisible, setPaymentFormVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBuy = (item) => {
    setSelectedItem(item);
    setPaymentFormVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.title}</h3>
              <p>
                Subscription: {item.subscription.type}
                <br />
                Duration: {item.subscription.duration}
                <br />
                Price: {item.subscription.price}
              </p>
              <button onClick={() => handleBuy(item)}>Buy</button>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      {isPaymentFormVisible && (
        <div className="payment-form">
          {isSubmitted ? (
            <div className="thank-you-message">
              <h2>Thank You!</h2>
              <p>We will reach out to you soon regarding your purchase.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Payment Form</h2>
              <label>
                Name:
                <input type="text" required />
              </label>
              <label>
                Email:
                <input type="email" required />
              </label>
              <label>
                Card Details:
                <input type="text" placeholder="Card Number" required />
              </label>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
