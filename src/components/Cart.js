import React from 'react';

function Cart({ cartItems, onClose, onIncrement, onDecrement }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose} className="btn btn-danger">
          Close
        </button>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x ${item.price}
              <button onClick={() => onIncrement(item)}>+</button>
              <button onClick={() => onDecrement(item)}>-</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
