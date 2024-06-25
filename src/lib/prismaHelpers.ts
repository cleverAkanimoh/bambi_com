import { auth } from "../../auth";
import { prisma } from "./prisma";

export const getDbUser = async ({ email }: { email: string }) => {
  try {
    const dbUser = await prisma.user.findUnique({
      where: { email },
    });
    return dbUser;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = async () => {
  const session = await auth();

  if (!session?.user) return null;

  const email = session.user.email ?? "";

  const currentUser = await prisma.user.findUnique({
    where: { email },
  });
  return currentUser;
};

export const getCompleteUserMetadata = async () => {
  const currentUser = await getCurrentUser();

  const currentUserId = currentUser?.id;

  const completeUserMetadata = await prisma.user.findUnique({
    where: { id: currentUserId },
    include: {
      CartItems: {},
      Wishlist: {},
    },
  });

  return completeUserMetadata;
};

export const getCurrentUserCartItems = async () => {
  const user = await getCurrentUser();
  const profile = await prisma.cartItems.findUnique({
    where: { userId: user?.id ?? "" },
  });

  return profile;
};

export const getCurrentUserWishlist = async () => {
  const user = await getCurrentUser();
  const wishes = await prisma.wishlist.findUnique({
    where: { userId: user?.id ?? "" },
  });

  return wishes;
};
