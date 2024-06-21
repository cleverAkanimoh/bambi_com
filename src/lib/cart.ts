import { auth, db } from "@/config/firebase-config";
import { CartType } from "@/types";
import { User } from "firebase/auth";
import {
  setDoc,
  doc,
  getDoc,
  deleteDoc,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

export const collectionName = "cartItems";

const cartItemRef = collection(db, collectionName);
export const getUserCartItems = async (user: User | null) => {
  if (user) {
    let cartItems: CartType[] = [];

    const items = await getDocs(cartItemRef);
    cartItems.forEach((docs) => {
      const cart = cartItems.push(docs);
      console.log(cart);
    });

    return cartItems;
  }
};

export const addToCart = async (cart: CartType) => {
  const userId = auth?.currentUser?.uid ?? "";
  const cartItemId = cart.id.toString() ?? "";
  // const cartItem = await getUserCartItems(auth.currentUser);

  const cartItems = await getDocs(cartItemRef);
  console.log(cartItems.docs);

  cartItems.docs.forEach((docs) => {
    if (docs.data().id === cartItemId) {
      throw new Error(`${cart.title} is already in cart`);
    }
    console.log(docs.id);
  });

  // console.log(itemAlreadyExist);

  // if (itemAlreadyExist) throw new Error(`${cart.title} is already in cart`);

  try {
    const cartItemRef = collection(db, collectionName);
    const doc = await addDoc(cartItemRef, {
      id: cartItemId,
      src: cart.src,
      href: cart.href,
      title: cart.title,
      price: cart.price,
      quantity: cart.quantity,
      userId,
    });

    console.log("Added new item to cart: ", doc.id);

    // revalidatePath("");
  } catch (error) {
    const errorText = "Please check your network connection";
    throw error;
  }
};

export const removeSingleCartItem = async (id: string | number) => {
  const userId = auth?.currentUser?.uid ?? "";
  const cartItemId = id.toString() ?? "";

  const cartItemRef = doc(db, collectionName, userId, cartItemId, "cartInfo");

  try {
    await deleteDoc(cartItemRef);
  } catch (error) {
    throw new Error("An error occurred, Cart item was not deleted");
  }
};

export const clearAllItemsFromCart = async () => {
  const userId = auth?.currentUser?.uid ?? "";
  try {
    await deleteDoc(doc(db, collectionName, userId));
  } catch (error) {
    throw new Error("An error occurred, Cart item was not deleted");
  }
};
