"use client";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect, useState } from "react";
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
  const [pending, setPending] = useState(false);

  useEffect(() => {});

  const handleAddToCart = () => {
    setPending(true);

    try {
      addToCart(cart);
      toast.success(`${cart.title ?? "Item"} has been added to cart`, {
        position: "top-center",
      });
      setPending(false);
    } catch (error) {
      toast.error(`${error}`);
      setPending(false);
    }
  };

  const styles = clsx("active:scale-90", className);
  return (
    <>
      {auth.currentUser ? (
        <button className={styles} onClick={() => handleAddToCart}>
          {pending ? "Adding..." : "Add to cart"}
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
