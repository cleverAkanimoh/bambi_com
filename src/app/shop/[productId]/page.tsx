import Breadcrumbs from "@/components/Breadcrumbs";
import ProductDisplay from "@/components/single-product-page/ProductDisplay";
import { getSingleProduct } from "@/helpers/products";

import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export default async function SingleProductPage({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const singleProduct = await getSingleProduct({ productId });

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
