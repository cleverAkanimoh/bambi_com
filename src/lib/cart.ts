"use client";

import { CartType } from "@/types";

export const getCartItem = () =>
  JSON.parse(localStorage.getItem("cartItems") || "[]");

export const addToCart = (cart: CartType) => {
  const cartItem: CartType[] = getCartItem();

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

export const clearAllItemsFromCart = () => localStorage.removeItem("cartItems");
