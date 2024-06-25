import { prisma } from "@/lib/prisma";
import { getCompleteUserMetadata, getCurrentUser } from "@/lib/prismaHelpers";
import { CartType } from "@/types";

// CRUD

// Create
export const addToCart = async ({
  src,
  href,
  title,
  price,
  quantity,
}: CartType) => {
  const user = await getCurrentUser();
  if (!user) throw new Error("Please login to add to cart");

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

// Delete All
