import { auth, db } from "@/config/firebase-config";
import { CartType } from "@/types";
import {
  setDoc,
  doc,
  getDoc,
  deleteDoc,
  onSnapshot,
  collection,
} from "firebase/firestore";

export const getUserCartItems = async () => {
  // let cartItems = [];
  // const userId = auth?.currentUser?.uid ?? "";
  // const cartItemRef = collection(db, "cartItems", userId);
  // const allCartItemCollections = onSnapshot(cartItemRef, (snapshot) => {
  //   const itemsInCart = snapshot.forEach((doc) => {
  //     return { id: doc.id, ...doc.data() };
  //   });
  //   console.log("log:", snapshot);
  // });
};

export const addToCart = async (cart: CartType) => {
  const userId = auth?.currentUser?.uid ?? "";
  const cartItemId = cart.id.toString() ?? "";

  const cartItemRef = doc(db, "cartItems", userId, cartItemId, "cartInfo");

  const itemAlreadyExist = await getDoc(cartItemRef);

  if (itemAlreadyExist.exists())
    throw new Error(`${cart.title} is already in cart`);

  await setDoc(cartItemRef, {
    id: cartItemId,
    src: cart.src,
    href: cart.href,
    title: cart.title,
    price: cart.price,
    quantity: cart.quantity,
    userId,
  });

  // return newCartItem;
};

export const removeSingleCartItem = async (id: string | number) => {
  const userId = auth?.currentUser?.uid ?? "";
  const cartItemId = id.toString() ?? "";

  const cartItemRef = doc(db, "cartItems", userId, cartItemId, "cartInfo");

  try {
    await deleteDoc(cartItemRef);
  } catch (error) {
    throw new Error("An error occurred, Cart item was not deleted");
  }
};

export const clearAllItemsFromCart = async () => {
  const userId = auth?.currentUser?.uid ?? "";
  try {
    await deleteDoc(doc(db, "cartItems", userId));
  } catch (error) {
    throw new Error("An error occurred, Cart item was not deleted");
  }
};
