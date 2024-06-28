import { prisma } from "./prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";

export const getDbUser = async ({ email }: { email: string }) => {
  const dbUser = await prisma.user.findUnique({
    where: { email },
  });
  if (!dbUser) return null;
  return dbUser;
};

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) return null;

  const email = session.user.email;

  const currentUser = await prisma.user.findUnique({
    where: { email },
  });
  return currentUser;
};

export const getCompleteUserMetadata = async () => {
  // Returns the entire information about the user
  const currentUser = await getCurrentUser();
  if (!currentUser) return null;

  const completeUserMetadata = await prisma.user.findFirst({
    where: { id: currentUser.id },
    include: {
      CartItems: true,
      Wishlist: true,
      Transactions: true,
    },
  });

  return completeUserMetadata;
};
