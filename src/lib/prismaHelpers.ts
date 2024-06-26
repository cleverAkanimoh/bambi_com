import { auth } from "../../auth";
import { prisma } from "./prisma";

export const getDbUser = async ({ email }: { email: string }) => {
  const dbUser = await prisma.user.findUnique({
    where: { email },
  });
  if (!dbUser) return null;
  return dbUser;
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
  //returns the entire information about the user
  const currentUser = await getCurrentUser();
  if (!currentUser) return null;
  
  const currentUserId = currentUser.id;

  const completeUserMetadata = await prisma.user.findFirst({
    where: { id: currentUserId },
    include: {
      CartItems: {},
      Wishlist: {},
      Transactions: {},
    },
  });

  return completeUserMetadata;
};
