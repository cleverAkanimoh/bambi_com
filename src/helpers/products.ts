"use server";

import { prisma } from "@/lib/prisma";

export const getAllProductsInStore = async () => {
  const store = await prisma.store.findFirst({
    where: { id: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e" },
    include: { products: {} },
  });
  if (!store?.products) return null;
  return store.products;
};

export const getSingleProduct = async ({
  productId,
}: {
  productId: string;
}) => {
  const singleProduct = await prisma.products.findFirst({
    where: { id: productId },
  });
  return singleProduct;
};
