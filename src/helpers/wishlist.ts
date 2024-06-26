import { getCompleteUserMetadata } from "@/lib/prismaHelpers";

export const getCurrentUserWishlist = async () => {
  const user = await getCompleteUserMetadata();

  return user?.Wishlist;
};
