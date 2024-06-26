"use server";

import { prisma } from "@/lib/prisma";
import { getCompleteUserMetadata, getCurrentUser } from "@/lib/prismaHelpers";
import { CartType } from "@/types";
import { revalidatePath } from "next/cache";

// CRUD

// Create
export const addToCart = async ({
  id,
  src,
  href,
  title,
  price,
  quantity,
}: CartType) => {
  const user = await getCurrentUser();
  if (!user) throw new Error("Please login to add to cart");

  const cartItemAlreadyExist = await prisma.cartItems.findFirst({
    where: { id: id.toString() },
  });

  if (cartItemAlreadyExist) {
    await prisma.cartItems.update({
      where: { id: cartItemAlreadyExist.id },
      data: {
        quantity: cartItemAlreadyExist.quantity + 1,
      },
    });

    return {
      message: "Item already exist. It's quantity will be incremented in cart",
    };
  }

  await prisma.cartItems.create({
    data: {
      userId: user?.id,
      href,
      src,
      price,
      quantity,
      title,
    },
  });
};

// Read
export const getCurrentUserCartItems = async () => {
  const user = await getCompleteUserMetadata();

  return user?.CartItems;
};

// Update
export const removeSingleCartItem = async (id: string) => {
  const thisCartItem = await prisma.cartItems.findFirst({ where: { id } });

  //   reduce the cart item quantity if 0 delete it
  if (thisCartItem) {
    await prisma.cartItems.update({
      where: { id: thisCartItem.id },
      data: {
        quantity: thisCartItem.quantity - 1,
      },
    });
    if (thisCartItem.quantity < 1) {
      await prisma.cartItems.delete({ where: { id: thisCartItem.id } });
      return {
        message: "Item has been removed",
      };
    }

    return {
      message: "Item quantity has been decremented",
    };
  }
};

// Delete All
export const deleteAllCartItems = async () => {
  const user = await getCurrentUser();

  await prisma.cartItems.deleteMany({ where: { userId: user?.id } });
  revalidatePath("", "page");
};
