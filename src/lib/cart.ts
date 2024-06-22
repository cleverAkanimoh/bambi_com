import { auth, db } from "@/config/firebase-config";
import { CartType } from "@/types";
import { User } from "firebase/auth";
import {
  doc,
  deleteDoc,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  updateDoc,
  query,
  where,
  getDoc,
} from "firebase/firestore";

export const collectionName = "cartItems";

export const cartItemRef = collection(db, collectionName);

export const getUserCartItems = (
  user: User | null,
  callback: (items: any[]) => void
) => {
  if (!user) {
    throw new Error("User is not authenticated");
  }

  try {
    const q = query(cartItemRef, where("userId", "==", user.uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(items);
    });

    // Return the unsubscribe function to allow the caller to stop listening to changes
    return unsubscribe;
  } catch (error) {
    console.error("An error occurred while getting cart items", error);
    throw new Error("An error occurred while getting cart items");
  }

  // return data;
};

export const addToCart = async (cart: CartType) => {
  const userId = auth?.currentUser?.uid ?? "";
  const cartItemId = cart.id.toString() ?? "";

  try {
    const cartItemsQuery = query(cartItemRef, where("userId", "==", userId));
    const cartItemsSnapshot = await getDocs(cartItemsQuery);

    let itemExists = false;

    if (!cartItemsSnapshot.empty) {
      cartItemsSnapshot.forEach(async (docSnapshot) => {
        const data = docSnapshot.data();
        if (data.id === cartItemId) {
          itemExists = true;
          const userDoc = doc(db, collectionName, docSnapshot.id);
          await updateDoc(userDoc, {
            quantity: data.quantity + cart.quantity,
          });
          console.log(`Updated quantity of item: ${cartItemId}`);
        }
      });
    }

    if (!itemExists) {
      const docRef = await addDoc(cartItemRef, {
        id: cartItemId,
        src: cart.src,
        href: cart.href,
        title: cart.title,
        price: cart.price,
        quantity: cart.quantity,
        userId,
      });

      console.log("Added new item to cart: ", docRef.id);
    }
  } catch (error) {
    const errorText = "Please check your network connection";
    console.error(errorText, error);
    throw new Error(errorText);
  }
};

export const removeSingleCartItem = async (id: string | number) => {
  const cartItemId = id.toString();

  try {
    const singleCartItemRef = doc(db, collectionName, cartItemId);
    const cartItemDoc = await getDoc(singleCartItemRef);

    if (cartItemDoc.exists()) {
      const cartItemData = cartItemDoc.data();
      const currentQuantity = cartItemData.quantity;

      if (currentQuantity > 1) {
        // Decrement the quantity
        await updateDoc(singleCartItemRef, { quantity: currentQuantity - 1 });
        console.log(`Decremented quantity for item: ${cartItemId}`);
      } else {
        // Remove the item from the cart
        await deleteDoc(singleCartItemRef);
        console.log(`Deleted item from cart: ${cartItemId}`);
      }
    } else {
      console.error("Cart item not found");
      throw new Error("Cart item not found");
    }
  } catch (error) {
    console.error("An error occurred, Cart item was not deleted", error);
    throw new Error("An error occurred, Cart item was not deleted");
  }
};

export const clearAllItemsFromCart = async () => {
  const userId = auth?.currentUser?.uid ?? "";

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  try {
    // const cartItemsRef = collection(db, collectionName);
    const q = query(cartItemRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    const deletePromises = querySnapshot.docs.map((docSnapshot) =>
      deleteDoc(doc(db, collectionName, docSnapshot.id))
    );

    await Promise.all(deletePromises);

    console.log(`All cart items for user ${userId} have been deleted.`);
  } catch (error) {
    console.error("An error occurred, Cart items were not deleted", error);
    throw new Error("An error occurred, Cart items were not deleted");
  }
};

export const getNumberOfItemsInCart = async (
  userId: string,
  callback: (total: number) => void
) => {
  const cartItemRef = collection(db, collectionName);
  const q = query(cartItemRef, where("userId", "==", userId));

  return onSnapshot(q, (querySnapshot) => {
    let totalItems = 0;
    querySnapshot.forEach((doc) => {
      const data = doc.data() as CartType;
      totalItems += data.quantity;
    });

    callback(totalItems);
  });
};
