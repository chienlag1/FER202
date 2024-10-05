import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Cart({ cartItems, onClose, onIncrement, onDecrement }) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <ul className="list-group">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>
                    {item.name}: {item.quantity} x ${item.price} = {item.quantity * item.price}$
                  </span>
                  <div>
                    <Button variant="btn btn-success" onClick={() => onIncrement(item)} className="mx-2">
                      +
                    </Button>
                    <Button variant="btn btn-danger" onClick={() => onDecrement(item)} disabled={item.quantity === 1}>
                      -
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
