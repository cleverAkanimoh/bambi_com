"use client";
import { toast } from "react-toastify";
import React, { useState } from "react";
import clsx from "clsx";
import { BiRefresh, BiTrash } from "react-icons/bi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CartType, WishListType } from "@/types";
import Button from "./Button";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import {
  addToCart,
  deleteAllCartItems,
  removeSingleCartItem,
} from "@/helpers/cart";
import { addWishListItems } from "@/helpers/wishlist"

export function AddToCartButton({
  cart,
  className = "px-6 py-3 bg-primary hover:bg-white hover:text-black rounded text-white transition-colors duration-300",
}: {
  cart: CartType;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    try {
      setLoading(true);
      const response = await addToCart(cart);
      if (response) {
        toast.warning(response?.message);
        return;
      }
      toast.success(`${cart.title} has been added to cart`);
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  const styles = clsx(
    "active:scale-90 disabled:pointer-events-none opacity-60",
    className
  );

  return (
    <button className={styles} onClick={handleAddToCart} disabled={loading}>
      {loading ? "Adding..." : "Add to cart"}
    </button>
  );
}

export function AddToWishlistButton({
  wishlistItem,
  className = "bg-white p-2 hover:bg-primary hover:text-white transition-all ease-linear duration-150 rounded",
}: {
  wishlistItem: WishListType;
  className?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const handleAddToWishlist = async () => {
    try {
      setIsLoading(true)
      await addWishListItems(wishlistItem)
      toast.success(`${wishlistItem.title} has been added to wishlist`);
      setIsLiked(prevState => !prevState)
    } catch (e) {
      toast.error(`${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  const styles = className;

  return (
    <button
      onClick={handleAddToWishlist}
      className={styles}
      disabled={isLoading}
    >
      {isLoading ? <BiRefresh className="animate-spin" /> : isLiked ? <FcLike /> : <CiHeart />}
    </button>
  );
}

export const DeleteCartItemById = ({
  id,
  item,
}: {
  id: string | number;
  item: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const response = await removeSingleCartItem(id.toString());
      toast.warning(response?.message);

      setIsLoading(false);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <button
      className="cart-product-remove text-xl text-red-600 disabled:pointer-events-none"
      onClick={handleDelete}
      disabled={isLoading}
    >
      {isLoading ? (
        <BiRefresh className="animate-spin" />
      ) : (
        <IoCloseCircleSharp />
      )}
    </button>
  );
};

export const DeleteAllCartItemsButton = () => {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteAllCartItems();
      toast.info("Your cart has been cleared");
      setLoading(false);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <Button title="Clear cart" onClick={handleDelete} disabled={loading}>
      {loading ? <BiRefresh className="animate-spin w-4" /> : <BiTrash />}
    </Button>
  );
};
