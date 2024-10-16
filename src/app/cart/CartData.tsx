// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'
import React from "react";
import { useCart } from "../context/cartContext";
import EmptyCart from "./EmptyCart";
import styles from "./Cart.module.css";
import { CartItemsQuantity } from "./items-quantity";
import ItemsList from "./ItemsList";
import Ordercheckout from "../ordercheckout/page";

export default function CartData() {
  const { cart, removeFromCart, updateCartQuantity, checkout, setCheckout} = useCart();

  return (
    <div>
      { checkout ? <Ordercheckout/> :
     (cart.length===0 ? <EmptyCart/> :
    <div className={styles.cart}>
      <ItemsList cart={cart} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity}/>
      <section>
      <CartItemsQuantity cart={cart} setCheckout={setCheckout}/>
      </section>
    </div>
    )
    }
    </div>
  );
}
