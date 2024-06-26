import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCardWrapper from "@/components/shop/ProductCardWrapper";
import React from "react";
import Loading from "../loading";

export default async function page({
  searchParams: { sort_by, search, currentPage },
}: {
  searchParams: { sort_by: string; search: string; currentPage: string };
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <Breadcrumbs active="Shop" />

      <React.Suspense fallback={<Loading />}>
        <ProductCardWrapper
          sortBy={sort_by || ""}
          currentPage={Number(currentPage) || 1}
          search={search || ""}
        />
      </React.Suspense>
    </main>
  );
}
