"use client";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { BiRefresh, BiTrash } from "react-icons/bi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CartType } from "@/types";
import Button from "./Button";
// import {
//   useAddToCart,
//   useRemoveSingleCartItem,
//   useClearAllItemsFromCart,
//   useToggleWishlistItem,
// } from "@/lib/cart";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { getCurrentUser } from "@/lib/prismaHelpers";

export function AddToCartButton({
  cart,
  className = "px-6 py-3 bg-primary hover:bg-white hover:text-black rounded text-white transition-colors duration-300",
}: {
  cart: CartType;
  className?: string;
}) {
  // const { user } = useAuth();
  // const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  // const addToCartMutation = useAddToCart();

  const handleAddToCart = async () => {
    const user = await getCurrentUser();
    if (!user) {
      toast.warning("You have to log in before you can add items to cart", {
        position: "top-center",
      });
      return;
    }

    try {
      // const await
      setLoading(true);
    } catch (error) {}
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
  wishlistItem: CartType;
  className?: string;
}) {
  const handleAddToWishlist = async () => {
    const user = await getCurrentUser();
    if (!user) {
      toast.warning("You have to log in before you can add items to wishlist", {
        position: "top-center",
      });
      return;
    }
  };

  const isLiked = false;
  const isLoading = false;

  const styles = className;

  return (
    <button
      onClick={handleAddToWishlist}
      className={styles}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : isLiked ? <FcLike /> : <CiHeart />}
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
  const handleDelete = async () => {
    const user = await getCurrentUser();
    // setLoading(true);
  };

  return (
    <button
      className="cart-product-remove text-xl text-red-600"
      onClick={handleDelete}
    >
      {false ? <BiRefresh className="animate-spin" /> : <IoCloseCircleSharp />}
    </button>
  );
};

export const DeleteAllCartItemsButton = () => {
  const handleDelete = async () => {
    const user = getCurrentUser();
    // setLoading(true);
  };

  return (
    <Button title="Clear cart" onClick={handleDelete} disabled={false}>
      {false ? <BiRefresh className="animate-spin w-4" /> : <BiTrash />}
    </Button>
  );
};
