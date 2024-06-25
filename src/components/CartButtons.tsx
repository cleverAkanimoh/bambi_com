"use client";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import clsx from "clsx";
import { BiRefresh, BiTrash } from "react-icons/bi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useAuth } from "@/context/auth-context";
import { CartType } from "@/types";
import Button from "./Button";
import { useAddToCart, useRemoveSingleCartItem, useClearAllItemsFromCart, useToggleWishlistItem } from "@/lib/cart";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";

export function AddToCartButton({
  cart,
  className = "px-6 py-3 bg-primary hover:bg-white hover:text-black rounded text-white transition-colors duration-300",
}: {
  cart: CartType;
  className?: string;
}) {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const addToCartMutation = useAddToCart();
 

  const handleAddToCart = () => {
    if (!user) {
      toast.warning("You have to log in before you can add items to cart", {
        position: "top-center",
      });
      return;
    }

    setLoading(true);
    addToCartMutation.mutate(cart, {
      onSuccess: () => {
        queryClient.invalidateQueries(["cartItems", user?.uid]);
     
        setLoading(false);
      },
      onError: (error: unknown) => {
        if (error instanceof Error) {
          toast.error(error.message);
        }
        setLoading(false);
      },
    });
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
  const { user } = useAuth();

  const { toggleWishlistItemMutation, isLoading } = useToggleWishlistItem(wishlistItem.id);

  const handleAddToWishlist = () => {
    if (!user) {
      toast.warning("You have to log in before you can add items to wishlist", {
        position: "top-center",
      });
      return;
    }

    toggleWishlistItemMutation.mutate(); // Toggle the item in the wishlist
  };

  const isLiked = toggleWishlistItemMutation.data?.isInWishlist ?? false;

  const styles = className;

  return (
    <button onClick={handleAddToWishlist} className={styles} disabled={isLoading}>
      {isLoading ? "Loading..." : (isLiked ? <FcLike /> : <CiHeart />)}
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
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const removeSingleCartItemMutation = useRemoveSingleCartItem();

  const handleDelete = () => {
    setLoading(true);
    removeSingleCartItemMutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(["cartItems", user?.uid]);
        toast.success(`${item} has been deleted from cart`);
        setLoading(false);
      },
      onError: (error: unknown) => {
        if (error instanceof Error) {
          toast.error(error.message);
        }
        setLoading(false);
      },
    });
  };

  return (
    <button
      className="cart-product-remove text-xl text-red-600"
      onClick={handleDelete}
    >
      {loading ? <BiRefresh className="animate-spin" /> : <IoCloseCircleSharp />}
    </button>
  );
};

export const DeleteAllCartItemsButton = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const clearAllItemsFromCartMutation = useClearAllItemsFromCart();

  const handleDelete = () => {
    setLoading(true);
    clearAllItemsFromCartMutation.mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries(["cartItems", user?.uid]);
        toast.success("All items have been deleted from the cart");
        setLoading(false);
      },
      onError: (error: unknown) => {
        if (error instanceof Error) {
          toast.error(error.message);
        }
        setLoading(false);
      },
    });
  };

  return (
    <Button title="Clear cart" onClick={handleDelete} disabled={loading}>
      {loading ? <BiRefresh className="animate-spin w-4" /> : <BiTrash />}
    </Button>
  );
};
