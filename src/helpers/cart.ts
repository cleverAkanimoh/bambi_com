"use server";


import { prisma } from "@/lib/prisma";
import { getCompleteUserMetadata, getCurrentUser } from "@/lib/prismaHelpers";
import { CartType } from "@/types";
import { revalidatePath } from "next/cache";

// CRUD

// Create
export const addToCart = async ({
  productId,
  src,
  href,
  title,
  price,
  quantity,
}: CartType) => {
  const user = await getCurrentUser();
  if (!user) throw new Error("Please login to add to cart");

  const cartItemAlreadyExist = await prisma.cartItems.findFirst({
    where: { productId },
  });

  if (cartItemAlreadyExist) {
    await prisma.cartItems.update({
      where: { productId: cartItemAlreadyExist.productId },
      data: {
        quantity: cartItemAlreadyExist.quantity + 1,
      },
    });
    revalidatePath("");
    return {
      message: "Item already exist. It's quantity will be incremented in cart",
    };
  }

  await prisma.cartItems.create({
    data: {
      userId: user?.id,
      productId,
      href,
      src,
      price,
      quantity,
      title,
    },
  });
  revalidatePath("");
};

// Read
export const getCurrentUserCartItems = async () => {
  const user = await getCompleteUserMetadata();

  return user?.CartItems;
};

// Update
export const removeSingleCartItem = async (id: string) => {
  const thisCartItem = await prisma.cartItems.findFirst({
    where: { productId: id },
  });

  //   reduce the cart item quantity if 0 delete it
  if (thisCartItem) {
    await prisma.cartItems.update({
      where: { productId: thisCartItem.productId },
      data: {
        quantity: thisCartItem.quantity - 1,
      },
    });
    if (thisCartItem.quantity < 1) {
      await prisma.cartItems.delete({
        where: { productId: thisCartItem.productId },
      });
      revalidatePath("");
      return {
        message: "Item has been removed",
      };
    }
    revalidatePath("");
    return {
      message: "Item quantity has been decremented",
    };
  }
  revalidatePath("");
};

// Delete All
export const deleteAllCartItems = async () => {
  const user = await getCurrentUser();

  await prisma.cartItems.deleteMany({ where: { userId: user?.id } });
  revalidatePath("", "page");
};
