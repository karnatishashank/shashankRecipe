import React from 'react';
import CartProvider from '../store/CartProvider';
import Meals from './Meals/Meals';
import Header from './Layout/Header';
import { useState } from 'react';
import Cart from './Cart/Cart';

function FoodOreder() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    };
  
    return (
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    );
}

export default FoodOreder
