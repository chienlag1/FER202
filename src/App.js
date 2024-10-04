import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList.js';
import Cart from './components/Cart';
import FeedBack from './components/Feedback.js';
import PageHome from './components/PageHome.js';
import pizza1 from './img/pizza1.jpg';
const items = [
  {
    id: 1,
    image: 'https://i.imgur.com/V3AzIpS.jpeg',
    name: 'Margherita Pizza',
    price: '24.00'
  },
  {
    id: 2,
    image: 'https://i.imgur.com/V3AzIpS.jpeg',
    name: 'Mushroom Pizza',
    price: '25.00'
  },
  {
    id: 3,
    image: 'https://i.imgur.com/V3AzIpS.jpeg',
    name: 'Hawaiian Pizza',
    price: '30.00'
  },
  {
    id: 4,
    image: 'https://i.imgur.com/V3AzIpS.jpeg',
    name: 'Pesto Pizza',
    price: '30.00'
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // Xử lý khi người dùng bấm nút "Buy"
  const handleBuy = item => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Tăng số lượng sản phẩm trong giỏ hàng
  const handleIncrement = item => {
    setCartItems(cartItems.map(cartItem => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)));
  };

  // Giảm số lượng sản phẩm trong giỏ hàng
  const handleDecrement = item => {
    const updatedCartItems = cartItems
      .map(cartItem => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
      .filter(cartItem => cartItem.quantity > 0);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Header cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} onCartClick={() => setShowPopup(true)} />
      <PageHome></PageHome>
      <ProductList items={items} onBuy={handleBuy} />
      {showPopup && (
        <Cart cartItems={cartItems} onClose={() => setShowPopup(false)} onIncrement={handleIncrement} onDecrement={handleDecrement} />
      )}
      <FeedBack></FeedBack>
    </div>
  );
}

export default App;
