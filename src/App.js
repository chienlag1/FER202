import Header from './components/Header';
import PageHome from './components/PageHome';
import CardItem from './components/CardItem';
import './App.css';
import FeedBack from './components/Feedback';
import menu1 from './img/menu1.jpg';
import menu2 from './img/menu2.jpg';
import menu3 from './img/menu3.jpg';
import menu4 from './img/menu4.jpg';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const item = [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: 40
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      price: 40
    },
    {
      id: 3,
      name: 'Margherita Pizza',
      price: 40
    },
    {
      id: 4,
      name: 'Margherita Pizza',
      price: 40
    }
  ];

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
      <Header></Header>
      <PageHome></PageHome>
      <CardItem></CardItem>
      <FeedBack></FeedBack>
    </div>
  );
}

export default App;
