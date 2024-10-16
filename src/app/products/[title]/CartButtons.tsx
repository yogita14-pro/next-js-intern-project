"use client";
import React from "react";
import { useCart } from "../../context/cartContext";
import { ProductData } from "../../types";

function CartButtons({ productData }: { productData:ProductData}) {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: productData?.product.id,
      name: productData?.product.name,
      price: productData?.product.pricing.priceRange.start.gross.amount,
      image: productData?.product.thumbnail.url,
      quantity: 1,
    });
  };
  return (
    <button onClick={handleAddToCart} className="cartbutton">
      Add to Cart
    </button>
  );
}

export default CartButtons;
