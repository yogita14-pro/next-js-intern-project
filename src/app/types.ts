export interface CartItem {
    id: string;         // Unique identifier for the item
    name: string;       // Name of the product
    price: number;      // Price of the product
    image: string;
    quantity: number;   // Quantity of the product in the cart
  }

  export interface ProductData{
    product:{
    id: string;
    name: string;
    description: string;
    productType: {
        id: string;
        name: string;
    }
    pricing: {
        priceRange: {
            start:{
                gross:{
                    amount: number;
                }
            }
        }
    }
    thumbnail: {
        url: string;
    }

    quantity: number;
    }
  }

  // Define the structure of the cart context value
  export interface CartContextType {
    cart: CartItem[];    // Array of cart items
    checkout: boolean;
    setCheckout: boolean;
    totalQuantity: number; // Total quantity of items in the cart
    addToCart: (item: CartItem) => void;  // Function to add an item to the cart
    removeFromCart: (id: string) => void; // Function to remove an item from the cart
    updateCartQuantity: (id: string, quantity: number) => void; // Function to update the quantity of a cart item
    clearCart: () => void; // Function to clear the cart
  }
