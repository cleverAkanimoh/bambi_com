import { auth, db } from "@/config/firebase-config";
import { CartType } from "@/types";
import {
  doc,
  deleteDoc,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

export const collectionName = "cartItems";

export const cartItemRef = collection(db, collectionName);

export const getUserCartItems = async () => {
  const snapshot = await getDocs(cartItemRef);

  const data: any[] = [];

  if (snapshot) {
    snapshot.forEach((cartDoc) => {
      const details = cartDoc.data();

      if (details.userId === auth.currentUser?.uid)
        data.push({ ...details, uid: cartDoc.id });
    });
  }

  return data;
};

export const addToCart = async (cart: CartType) => {
  const userId = auth?.currentUser?.uid ?? "";
  const cartItemId = cart.id.toString() ?? "";

  const cartItems = await getUserCartItems();

  if (cartItems) {
    cartItems.forEach((docs) => {
      // check if item already exist
      if (docs.data().id === cartItemId) {
        throw new Error(`${cart.title} is already in cart`);
      }
      console.log(docs.id);
    });
  }

  try {
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
  // const userId = auth?.currentUser?.uid ?? "";
  // const cartItemId = id.toString() ?? "";

  const cartItemRef = doc(db, collectionName);

  try {
    await deleteDoc(cartItemRef);
  } catch (error) {
    throw new Error("An error occurred, Cart item was not deleted");
  }
};

export const clearAllItemsFromCart = async () => {
  try {
    await deleteDoc(doc(db, collectionName));
  } catch (error) {
    throw new Error("An error occurred, Cart item was not deleted");
  }
};
