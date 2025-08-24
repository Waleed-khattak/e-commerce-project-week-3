import { Link } from 'react-router-dom';
import "./shopping-cart.css";

const ShoppingCart = ({ cartItems, setCartItems }) => {

  const handleQuantityChange = (id, qty) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((sum, item) => {
    const price = typeof item.productPrice === "string"
      ? parseInt(item.productPrice.replace(/[^0-9]/g, ""))
      : item.productPrice;
    return sum + price * item.quantity;
  }, 0);


  return (
    <>
      <div className="container">
        <div className="shopping-cart-container">
          <h2 className="cart-title">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img
                      src={item.productImage}
                      alt={item.productTitle}
                      className="cart-thumb"
                    />
                    <div className="cart-details">
                      <h4>{item.productTitle}</h4>
                      <div className="cart-qty">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item.id, Number(e.target.value))
                          }
                        />
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <p className="cart-price">
                        Rs. {(
                          (typeof item.productPrice === "string"
                            ? parseInt(item.productPrice.replace(/[^0-9]/g, ""))
                            : item.productPrice
                          ) * item.quantity
                        ).toLocaleString()}
                      </p>

                    </div>
                    <button
                      className="cart-remove-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <h3>Total: Rs.{totalAmount.toLocaleString()}</h3>
               <Link to='/checkout'><button className="checkout-btn">Checkout</button></Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
