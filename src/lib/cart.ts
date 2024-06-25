"use client";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { auth, db } from "@/config/firebase-config";
import { CartType } from "@/types";
import { User } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { useState } from "react";
import { shopProducts } from "./products";

const collectionName = "cartItems";
export const cartItemRef = collection(db, collectionName);
export const shopProductRef = collection(db, "products");

const wishlistRef = collection(db, "wishlist");

export const addProducts = () => {
  shopProducts.forEach(async (product) => {
    await addDoc(shopProductRef, {
      name: product.heading,
      images: [product.src1, product.src2],
      new_price: product.new_price,
      old_price: product.old_price,
      isLikedBy: ["userId"],
      category: product.sales_category,
      description: product.description,
      availability: product.availability,
      href: product.href,
    });
  });
};

export const useWishlistItems = () => {
  const user = auth.currentUser;
  return useQuery<CartType[]>(
    ["wishlistItems", user?.uid],
    async () => {
      if (!user) {
        throw new Error("User is not authenticated");
      }

      const q = query(wishlistRef, where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CartType[];
      return items;
    },
    {
      enabled: !!user,
    }
  );
};

export const useToggleWishlistItem = (wishlistItemId: string | number) => {
  const queryClient = useQueryClient();

  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = false;

  const toggleWishlistItemMutation = useMutation(
    async () => {
      const userId = auth?.currentUser?.uid ?? "";
      if (!userId) {
        throw new Error("User is not authenticated");
      }

      const q = query(
        wishlistRef,
        where("userId", "==", userId),
        where("itemId", "==", wishlistItemId)
      );
      const snapshot = await getDocs(q);
      let isInWishlist = false;

      if (!snapshot.empty) {
        // Item exists in wishlist, remove it
        const docId = snapshot.docs[0].id;
        await deleteDoc(doc(db, "wishlist", docId));
      } else {
        // Item does not exist in wishlist, add it
        await addDoc(wishlistRef, {
          itemId: wishlistItemId,
          userId,
        });
        isInWishlist = true;
      }

      return { isInWishlist };
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("wishlist");
      },
    }
  );

  return { toggleWishlistItemMutation, isLoading };
};

export const useRemoveFromWishlist = () => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const removeFromWishlistMutation = useMutation(
    async (wishlistItemId: string) => {
      const userId = auth?.currentUser?.uid;
      if (!userId) {
        throw new Error("User is not authenticated");
      }

      const q = query(
        wishlistRef,
        where("userId", "==", userId),
        where("itemId", "==", wishlistItemId)
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        // Item exists in wishlist, remove it
        const docId = snapshot.docs[0].id;
        await deleteDoc(doc(db, "wishlist", docId));
      } else {
        throw new Error("Item not found in wishlist");
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("wishlist"); // Invalidate wishlist query on success
        console.log("Item removed from wishlist");
        setLoading(false);
      },
      onError: (error: unknown) => {
        if (error instanceof Error) {
          console.error(error.message);
        }
        setLoading(false);
      },
    }
  );

  const handleRemoveFromWishlist = async (wishlistItemId: string) => {
    setLoading(true);
    try {
      await removeFromWishlistMutation.mutateAsync(wishlistItemId);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    handleRemoveFromWishlist,
    loading,
  };
};

export const useCartItems = (user: User | null) => {
  return useQuery<CartType[]>(
    ["cartItems", user?.uid],
    async () => {
      if (!user) {
        throw new Error("User is not authenticated");
      }

      const q = query(cartItemRef, where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CartType[];
      return items;
    },
    {
      enabled: !!user,
    }
  );
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (cart: CartType) => {
      const userId = auth?.currentUser?.uid ?? "";
      const cartItemId = cart.id.toString() ?? "";

      const cartItemsQuery = query(cartItemRef, where("userId", "==", userId));
      const cartItemsSnapshot = await getDocs(cartItemsQuery);

      let itemExists = false;

      if (!cartItemsSnapshot.empty) {
        for (const docSnapshot of cartItemsSnapshot.docs) {
          const data = docSnapshot.data();
          if (data.id === cartItemId) {
            itemExists = true;
            const userDoc = doc(db, collectionName, docSnapshot.id);
            await updateDoc(userDoc, {
              quantity: data.quantity + cart.quantity,
            });
          }
        }
      }

      if (!itemExists) {
        await addDoc(cartItemRef, {
          id: cartItemId,
          src: cart.src,
          href: cart.href,
          title: cart.title,
          price: cart.price,
          quantity: cart.quantity,
          userId,
        });
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cartItems");
      },
    }
  );
};

export const useRemoveSingleCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id: string | number) => {
      const cartItemId = id.toString();

      const singleCartItemRef = doc(db, collectionName, cartItemId);
      const cartItemDoc = await getDoc(singleCartItemRef);

      if (cartItemDoc.exists()) {
        const cartItemData = cartItemDoc.data();
        const currentQuantity = cartItemData.quantity;

        if (currentQuantity > 1) {
          await updateDoc(singleCartItemRef, { quantity: currentQuantity - 1 });
        } else {
          await deleteDoc(singleCartItemRef);
        }
      } else {
        throw new Error("Cart item not found");
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cartItems");
      },
    }
  );
};

export const useClearAllItemsFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      const userId = auth?.currentUser?.uid ?? "";

      if (!userId) {
        throw new Error("User is not authenticated");
      }

      const q = query(cartItemRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      const deletePromises = querySnapshot.docs.map((docSnapshot) =>
        deleteDoc(doc(db, collectionName, docSnapshot.id))
      );

      await Promise.all(deletePromises);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cartItems");
      },
    }
  );
};
