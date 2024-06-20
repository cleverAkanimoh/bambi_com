import { shopProducts } from "@/lib/products";
import { notFound } from "next/navigation";
import React from "react";

export default function SingleProductPage({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const singleProduct = shopProducts[Number(productId)];

  if (!singleProduct) return notFound();

  return <div>{singleProduct.description}</div>;
}
