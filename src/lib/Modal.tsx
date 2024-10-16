// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { useCart } from '../app/context/cartContext';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const {setCart} = useCart();
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart([]); // Set cart items from localStorage
    }
  }, [setCart]);
  const clearCart = () => {
    setCart([]);            // Clear state
    localStorage.removeItem('cart'); // Clear cart from localStorage
  };
  return (
    <>
      <div>{children}</div>
      <button
        onClick={() => {
          router.push('/')
          clearCart()
        }}
        className='remove'
      >
        Continue Shopping&gt;&gt;&gt;
      </button>
    </>
  )
}
