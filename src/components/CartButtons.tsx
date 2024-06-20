"use client";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { addToCart } from "@/lib/cart";
import { CartType } from "@/types";
import { useFormStatus } from "react-dom";

import { auth } from "@/config/firebase-config";
import clsx from "clsx";

export function AddToCartButton({
  cart,
  className = "btn btn-dark btn-hover-primary",
}: {
  cart: CartType;
  className?: string;
}) {
  const { pending } = useFormStatus();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addToCart(cart);
      toast.success(`${cart.title ?? "Item"} has been added to cart`, {
        position: "top-center",
      });
    } catch (error) {}
  };

  const styles = clsx("active:scale-90", className);
  return (
    <>
      {auth.currentUser ? (
        <form onSubmit={handleSubmit}>
          <button className={styles} disabled={pending}>
            {pending ? "Adding..." : "Add to cart"}
          </button>
        </form>
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
