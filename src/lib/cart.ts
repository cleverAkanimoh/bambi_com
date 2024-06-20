// "use client";

import { CartType } from "@/types";

export const addToCart = async (cart: CartType) => {
  const cartItem: CartType[] = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  );

  if (cartItem.find((item) => item.id === cart.id))
    throw new Error(`${cart.title} is already in cart`);

  cartItem.push(cart);

  localStorage.setItem("cartItems", JSON.stringify(cartItem));
};

export const removeSingleCartItem = (id: string | number) => {
  const cartItem: CartType[] = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  );
  const newCartItem = cartItem.filter((item) => item.id !== id);
  console.log(newCartItem);

  localStorage.setItem("cartItems", JSON.stringify(newCartItem));
};
