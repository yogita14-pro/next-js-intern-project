// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { CartContextType, CartItem } from '../types';

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider=({ children }: { children: React.ReactNode })=>{
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isHydrated, setIsHydrated] = useState(false);  // Track if cart is hydrated from localStorage
    const [checkout, setCheckout]=useState(false);
    // Hydrate cart from localStorage, but only on client-side
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
        setIsHydrated(true);  // Hydration is complete
      }
    }, []);

    // Update localStorage whenever the cart changes, but only after hydration
    useEffect(() => {
      if (isHydrated && typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }, [cart, isHydrated]);

    // Add item to cart
    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            // Check if the item is already in the cart
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
              // If the item is already in the cart, increase the quantity
              return prevCart.map((cartItem) =>
                cartItem?.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                  : cartItem
              );
            } else {
              // If the item is not in the cart, add it as a new item
              return [...prevCart, item];
            }
          });
    };

    // Remove item from cart
    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item?.id !== id));
    };

    // Update item quantity in cart
    const updateCartQuantity = (id: string, quantity:number) => {
        setCart((prevCart) =>
        prevCart.map((item) =>
            item.id === id ? { ...item, quantity: quantity } : item
        )
        );
    };

    // Track the total qunatity of items present in the cart
    const totalQuantity = cart.reduce((total:number, item: CartItem) => total + item.quantity, 0);
    if (!isHydrated) return null
    return <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, updateCartQuantity, totalQuantity, setCheckout, checkout}}>{children}</CartContext.Provider>
}

export const useCart = (): CartContextType => {
    const context= useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
