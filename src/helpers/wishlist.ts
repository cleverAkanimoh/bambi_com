"use server";

import { prisma } from "@/lib/prisma";
import { getCompleteUserMetadata, getCurrentUser } from "@/lib/prismaHelpers";
import { WishListType } from "@/types";

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
