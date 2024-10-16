"use client";
import React from "react";
import { useCart } from "../context/cartContext";
import styles from "./Cart.module.css";
export function CartItemsQuantity({cart, setCheckout}){
  let totalprice = 0;
  cart.map(
    (item) =>
      (totalprice += Number(
        (item.quantity * parseFloat(item.price - item.price / 10)).toFixed(2)
      ))
  );
  return(
    <section className="total-pricing">
    <section className="item-total">
        <h1 style={{paddingBottom: '20px'}}>Order Summary</h1>
        <p>This order qualifies for Free Shipping!</p>
        <div className="sub">
          <h5>Item Subtotal</h5>
          <p>
            ${totalprice.toFixed(2)}</p>
        </div>
        <div className="sub">
          <h5>Deliver to Grenola - 67346</h5>
          <p style={{color: 'green'}}>FREE</p>
        </div>
        <div className="sub">
          <h5>Estimated Tax</h5>
          <p>$10.50</p>
        </div>
        </section>
        <section>
          <div className="total sub">
            <h4>Total</h4>
            <p>${(totalprice+10.50).toFixed(2)}</p>
          </div>
          <button className="cartbutton" style={{width: '100%'}} onClick={()=>setCheckout(true)}>Proceed to Checkout</button>
        </section>
    </section>
  )
}
function CartIconQuantity() {
  const { totalQuantity } = useCart();
  return (
    <div>
      {totalQuantity > 0 && (
        <span className={styles.cartQuantity}>{totalQuantity}</span>
      )}
    </div>
  );
}

export default CartIconQuantity;
