import { toast } from "react-toastify";

import React from "react";
import { addToCart } from "@/lib/cart";
import { CartType } from "@/types";

import { auth } from "@/config/firebase-config";
import clsx from "clsx";

export function AddToCartButton({
  cart,
  className = "btn btn-dark btn-hover-primary",
}: {
  cart: CartType;
  className?: string;
}) {
  const handleAddToCart = () => {
    try {
      addToCart(cart);
      toast.success(`${cart.title ?? "Item"} has been added to cart`, {
        position: "top-center",
      });
    } catch (error) {
      toast.error(`${error}`, { position: "top-center" });
    }
  };

  const styles = clsx("active:scale-90", className);
  return (
    <>
      {auth.currentUser ? (
        <button className={styles} onClick={() => handleAddToCart()}>
          {"Add to cart"}
        </button>
      ) : (
        <button
          className={styles}
          onClick={() =>
            toast.info("You have to log in before you can add item to cart", {
              position: "top-center",
            })
          }
        >
          Add to cart
        </button>
      )}
    </>
  );
}
