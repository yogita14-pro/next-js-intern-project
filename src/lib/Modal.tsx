'use client'

import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react';
import { CartContext } from '../app/context/cartContext';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const {setCart} = useContext(CartContext);
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart([]); // Set cart items from localStorage
    }
  }, []);
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
          clearCart
        }}
        className='remove'
      >
        Continue Shopping>>>
      </button>
    </>
  )
}
