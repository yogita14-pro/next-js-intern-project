'use client'
import { createContext, useContext, useState, useEffect } from 'react'

export const CartContext = createContext({})

export const CartProvider=({children}: {children:any})=>{
    const [cart, setCart] = useState([]);
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
    const addToCart = (item: any) => {
        setCart((prevCart:any) => {
            // Check if the item is already in the cart
            const existingItem = prevCart.find((cartItem: any) => cartItem.id === item.id);

            if (existingItem) {
              // If the item is already in the cart, increase the quantity
              return prevCart.map((cartItem:any) =>
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
        setCart((prevCart: any) => prevCart.filter((item: any) => item?.id !== id));
    };

    // Update item quantity in cart
    const updateCartQuantity = (id: string, quantity:number) => {
        setCart((prevCart: any) =>
        prevCart.map((item: any) =>
            item.id === id ? { ...item, quantity: quantity } : item
        )
        );
    };

    // Track the total qunatity of items present in the cart
    const totalQuantity = cart.reduce((total, item: any) => total + item.quantity, 0);
    if (!isHydrated) return null
    return <CartContext.Provider value={{cart,setCart, addToCart, removeFromCart, updateCartQuantity, totalQuantity, setCheckout, checkout}}>{children}</CartContext.Provider>
}

export const useCart = () => {
    return useContext(CartContext);
};
