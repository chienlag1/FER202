import pizza1 from './img/pizza1.jpg';
import pizza2 from './img/pizza2.jpg';
import pizza3 from './img/pizza3.jpg';
import pizza4 from './img/pizza4.jpg';
import pizza5 from './img/pizza5.jpg';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { createContext } from 'react';
import PageHome from './components/PageHome.js';

import ProductList from './components/ProductList.js';
import FeedBack from './components/Feedback.js';
import CardItem from './components/CardItem.js';
import Cart from './components/Cart.js';
import Login from './components/Login.js';
export const loggedInUser = createContext();

function App() {
  const images = [pizza1, pizza2, pizza3, pizza4, pizza5];
  const [cart, setCart] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const [products, setProducts] = useState();
  const [user, setUser] = useState();
  console.log(user);

  const sumQuantityProduct = arr => {
    return arr.reduce((quantity, item) => {
      return (quantity = quantity + item.count);
    }, 0);
  };

  // fetch API lấy dữ liệu list of products
  useEffect(() => {
    fetch('https://api-demo-4gqb.onrender.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const quantity = sumQuantityProduct(cart);
    setQuantityProduct(quantity);
  }, [cart]);

  const addProductToCart = product => {
    if (!product) return null;
    if (cart.indexOf(product) !== -1) {
      const index = cart.indexOf(product);
      const arr = [...cart];
      arr[index].count = arr[index].count + 1;
      setCart(arr);
    } else {
      const arr = [...cart];
      product.count = 1;
      arr.push(product);
      setCart(arr);
    }
  };

  const handleIncrease = product => {
    const index = cart.indexOf(product);
    const arr = [...cart];
    arr[index].count = arr[index].count + 1;
    setCart(arr);
  };

  const handleDecrease = product => {
    const index = cart.indexOf(product);
    const arr = [...cart];
    arr[index].count = arr[index].count - 1;

    const newArr = arr.filter(product => {
      return product.count !== 0;
    });
    setCart(newArr);
  };

  const handleBuy = product => {
    addProductToCart(product);
  };

  const handleLoginSubmit = async form => {
    try {
      const res = await fetch('https://api-demo-4gqb.onrender.com/users/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log('data', data);
      setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <loggedInUser.Provider value={user}>
      <Header handleOnClick={quantityProduct} />
      <PageHome
        images={images}
        products={products}
        title="Neapolian Pizza"
        description="If you are looking for a traditional pizza the Neapolian is the best option!"
      ></PageHome>
      <ProductList label="Our Menu" handleBuy={handleBuy} products={products}></ProductList>

      <Cart cart={cart} handleDecrease={handleDecrease} handleIncrease={handleIncrease}></Cart>
      <FeedBack></FeedBack>
      <Login handleLoginSubmit={handleLoginSubmit}></Login>
    </loggedInUser.Provider>
  );
}

export default App;
