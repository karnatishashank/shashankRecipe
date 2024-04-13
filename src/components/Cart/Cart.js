import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { FaCheckCircle } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const [isOrdered, setIsOrdered] = useState(false);

  const orderHandler = () => {
    setIsOrdered(true);
    cartCtx.clearCart();
  };

  const closeModalHandler = () => {
    setIsOrdered(false);
    props.onClose();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    var address = document.getElementById("orderAddress").value;
    var orderMail = document.getElementById("orderEmail").value;
    var orderDetails = {
      total_amount : totalAmount,
      order_address: address,
      order_mail: orderMail
    }
   

    emailjs
      .send("service_kxgcszi", "template_0b9u6nn",orderDetails, {
        publicKey: "mv3F-0e93ynTVh_Fm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          orderHandler();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
     
  };

  return (
    <>
      <Modal onClose={props.onClose}>
      {!isOrdered && (
  <div>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
      
    </div>
    <form>
        <label htmlFor='orderAddress'>Address:</label>
        <input type='text' className='adress' id='orderAddress' placeholder='Your Address' name='your_address' />
        <label htmlFor='orderEmail'>Email:</label>
        <input type='email' className='email' id='orderEmail' placeholder='Your Email' name='your_email' />
      </form>
  </div>
)}

        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <>
              {isOrdered ? (
                <p>Order Placed! Thank you for your purchase.</p>
              ) : (
                <button className={classes.button} onClick={sendEmail}>
                  Order
                </button>
              )}
            </>
          )}
        </div>
      </Modal>

      {isOrdered && (
        <Modal onClose={closeModalHandler}>
          <p><FaCheckCircle/> Order Success! Thank you for your purchase.</p>
        </Modal>
      )}
    </>
  );
};

export default Cart;
