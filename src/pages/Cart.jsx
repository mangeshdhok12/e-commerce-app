import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0)
    return <p className="empty-cart">Your cart is empty!</p>;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container cart">
      <h1 className="cart-heading">Your Cart</h1>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>
                ${item.price} x {item.quantity} = $
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
