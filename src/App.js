import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList.js';
import Cart from './components/Cart';
import FeedBack from './components/Feedback.js';
import PageHome from './components/PageHome.js';
import Login from './components/Login.js';
import { createContext } from 'react';

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
export const loggedInUser = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const [products, setProducts] = useState();
  const [user, setUser] = useState();

  const sumQuantityProduct = arr => {
    return arr.reduce((quantity, item) => {
      return (quantity = quantity + item.count);
    }, 0);
  };
  useEffect(() => {
    fetch('https://api-demo-4gqb.onrender.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const quantity = sumQuantityProduct(cartItems);
    setQuantityProduct(quantity);
  }, [cartItems]);

  const addProductToCart = product => {
    if (!product) return null;
    if (cartItems.indexOf(product) !== -1) {
      const index = cartItems.indexOf(product);
      const arr = [...cartItems];
      arr[index].count = arr[index].count + 1;
      setCartItems(arr);
    } else {
      const arr = [...cartItems];
      product.count = 1;
      arr.push(product);
      setCartItems(arr);
    }
  };

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

  const handleLoginSubmit = async ({ email, password }) => {
    try {
      const response = await fetch('https://api-demo-4gqb.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }
      const data = await response.json();
      console.log('Login successful:', data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <loggedInUser.Provider value={user}>
      <Header
        handleOnClick={quantityProduct}
        cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={() => setShowPopup(true)}
        onLoginClick={() => setShowLogin(true)}
      />
      <Login handleLoginSubmit={handleLoginSubmit} onClose={() => setShowLogin(false)}></Login>
      <PageHome></PageHome>
      <ProductList items={items} onBuy={handleBuy} />
      {showPopup && (
        <Cart cartItems={cartItems} onClose={() => setShowPopup(false)} onIncrement={handleIncrement} onDecrement={handleDecrement} />
      )}

      <FeedBack></FeedBack>
    </loggedInUser.Provider>
  );
}

export default App;
