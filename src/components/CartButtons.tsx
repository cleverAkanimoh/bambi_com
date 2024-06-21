"use client";
import { toast } from "react-toastify";

import React, { useState } from "react";
import {
  addToCart,
  clearAllItemsFromCart,
  removeSingleCartItem,
} from "@/lib/cart";
import { CartType } from "@/types";

import clsx from "clsx";

import Button from "./Button";
import { BiRefresh, BiTrash } from "react-icons/bi";
import { useAuth } from "@/context/auth-context";

export function AddToCartButton({
  cart,
  className = "btn btn-dark btn-hover-primary",
}: {
  cart: CartType;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await addToCart(cart);

      toast.success(`${cart.title ?? "Item"} has been added to cart`);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
      setLoading(false);
    }
  };

  const styles = clsx(
    "active:scale-90 disabled:pointer-events-none opacity-60",
    className
  );
  return (
    <>
      {user ? (
        <button
          className={styles}
          onClick={() => handleAddToCart()}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add to cart"}
        </button>
      ) : (
        <button
          className={styles}
          onClick={() =>
            toast.warning(
              "You have to log in before you can add item to cart",
              {
                position: "top-center",
              }
            )
          }
        >
          Add to cart
        </button>
      )}
    </>
  );
}

export const DeleteCartItemById = ({
  id,
  item,
}: {
  id: string | number;
  item: string;
}) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    try {
      await removeSingleCartItem(id);
      toast.success(`${item} has been deleted from cart`);

      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
      setLoading(false);
    }
  };
  return (
    <button
      className="cart-product-remove text-sm"
      onClick={() => handleDelete()}
    >
      {loading ? (
        <BiRefresh className="animate-spin" />
      ) : (
        <i className="pe-7s-close"></i>
      )}
    </button>
  );
};

export const DeleteAllCartItemsButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await clearAllItemsFromCart();
      toast.success(`All Item has been deleted from cart`);

      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
      setLoading(false);
    }
  };
  return (
    <Button
      title="Clear cart"
      onClick={() => handleDelete()}
      disabled={loading}
    >
      {loading ? <BiRefresh className="animate-spin w-4" /> : <BiTrash />}
    </Button>
  );
};
