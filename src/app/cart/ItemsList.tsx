// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import Link from 'next/link'
import styles from "./Cart.module.css";
import { IconDeleteBin6Line } from '@/src/lib/Icons';
import Image from 'next/image';
import { CartContextType, CartItem } from '../types';

export default function ItemsList({cart,removeFromCart, updateCartQuantity}:{cart: CartContextType,removeFromCart: CartItem, updateCartQuantity:CartContextType}) {
  return (
    <section>
      <h1>My Shopping Cart</h1>
    <ul className='items'>
    {cart?.map((item) => (
      <li key={item.id} className={styles["cart-list"]}>
        <div className="item-details">
          <Image src={item.image} alt='cart-item' height='200' width="200"></Image>
          <section className="cart-item-detials">
            <div>
              <Link href={`/products/${item.id}`} target="_blank" >
                <h1>{item.name}</h1>
              </Link>
              <div style={{ color: "black", fontSize: "30px" }}>
                ${parseFloat(item.price - item.price / 10).toFixed(2)}
                <span className="actual-price"> ${item.price}</span>
              </div>
            </div>
            <div>
              <button
                className="operator inc"
                style={{
                  marginTop: "20px",
                  borderRadius: "12px 0 0 12px",
                  paddingLeft: "10px",
                }}
                onClick={() =>
                  item.quantity > 1
                    ? updateCartQuantity(item.id, item.quantity - 1)
                    : removeFromCart(item.id)
                }
              >
                -
              </button>
              <span className="quantity-output">{item.quantity}</span>
              <button
                className="operator"
                style={{
                  borderRadius: "0 12px 12px 0",
                  paddingRight: "8px",
                }}
                onClick={() =>
                  updateCartQuantity(item.id, item.quantity + 1)
                }
              >
                +
              </button>
              <p
                style={{
                  fontSize: "15px",
                  paddingTop: "10px",
                  color: "grey",
                }}
              >
                Get it between Thu. Oct 17 – Sat. Oct 19-Free Ground
              </p>
            </div>
          </section>
        </div>
        <div className="item-total-amount">
          <div className="">
            <h5 style={{ color: "rgb(51 122 177)" }}>Total amount</h5>
            <p style={{ color: "rgb(119, 28, 28)" }}>
              $
              {(
                parseFloat(item.price - item.price / 10) * item.quantity
              ).toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="remove"
          >
            <IconDeleteBin6Line />
            Remove
          </button>
        </div>
      </li>
    ))}
  </ul>
  </section>
  )
}
