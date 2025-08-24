import React, { useState } from "react";
import "./check-out.css";

const Checkout = () => {
  const [formData, setFormData] = useState({fullName: "",email: "",phone: "",address: "",payment: "Cash on Delivery",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setFormData({fullName: "",email: "",phone: "",address: "",paymentMethod: "card",
    });

    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <div className="container">
        <div className="checkout-container">
          <h2 className="checkout-title">Checkout</h2>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option>Credit/Debit Card</option>
              <option>Cash on Delivery</option>
            </select>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>

          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                🎉 Order Placed Successfully!
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
