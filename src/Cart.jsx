import React from 'react';
import { useCart } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const { items, totalQuantity, totalPrice, updateQuantity, removeItemFromCart } = useCart();

  const handleQuantityChange = (itemId, event) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(itemId, newQuantity);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Cart</h2>
        <ul className="list-group">
          {items.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.title} - Quantity: {' '}
              <select
                value={item.quantity}
                onChange={(event) => handleQuantityChange(item.id, event)}
              >
                {[...Array(item.stock).keys()].map((value) => (
                  <option key={value} value={value + 1}>{value + 1}</option>
                ))}
              </select>
              <button
                className="btn btn-danger btn-sm ml-2"
                onClick={() => removeItemFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
