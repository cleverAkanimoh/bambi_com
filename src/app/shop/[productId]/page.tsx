"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import ProductDisplay from "@/components/single-product-page/ProductDisplay";
import { shopProducts } from "@/lib/products";

import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export default function SingleProductPage({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const singleProduct = shopProducts[Number(productId) - 1];

  if (!singleProduct) return notFound();

  return (
    <main className="flex flex-col">
      <Breadcrumbs active="Single Product Page" />
      <section className="mt-8 mb-3">
        {/* dynamic */}
        <Suspense>
          <ProductDisplay singleProduct={singleProduct} />
        </Suspense>

        {/* <AdditionalInformationForProduct /> */}
      </section>
    </main>
  );
}
