"use server";

import { prisma } from "@/lib/prisma";
import { getCompleteUserMetadata, getCurrentUser } from "@/lib/prismaHelpers";
import { WishListType } from "@/types";
import { revalidatePath } from "next/cache";

export const getCurrentUserWishlist = async () => {
  const user = await getCompleteUserMetadata();

  return user?.Wishlist;
};

export const addWishListItems = async ({
  productId,
  href,
  src,
  price,
  quantity,
  title,
  availability,
}: WishListType) => {
  const user = await getCurrentUser();
  if (!user) throw new Error("Please login to add to wishlist");
  
  const wishItem = await prisma.wishlist.findFirst({
    where: { productId },
  });
  if (wishItem) {
    await prisma.wishlist.delete({
      where: { productId },
    });
    return;
  } else {
    await prisma.wishlist.create({
      data: {
        userId: user?.id,
        productId,
        href,
        src,
        price,
        quantity,
        title,
        availability,
      },
    });
  }
};


export const removeWishListItem = async (productId: string) => {
  const user = await getCurrentUser();
  if (!user) throw new Error("Please login to remove from wishlist");

  const wishItem = await prisma.wishlist.findFirst({
    where: { productId },
  });

  if (!wishItem) {
    return { message: "Item not found in wishlist" };
  }

  await prisma.wishlist.delete({
    where: { productId },
  });
 
  revalidatePath(" ");
  return { message: "Item has been removed from wishlist" };
};
