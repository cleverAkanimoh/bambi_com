import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/shop/Header";
import ModalQuickView from "@/components/shop/ModalQuickView";
import ProductCardWrapper from "@/components/shop/ProductCardWrapper";
import React from "react";

export default function page({
  searchParams: { sort_by, search, currentPage },
}: {
  searchParams: { sort_by: string; search: string; currentPage: string };
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <Breadcrumbs active="Shop" />

      <React.Suspense>
        <ProductCardWrapper
          sortBy={sort_by ?? ""}
          currentPage={Number(currentPage) ?? 1}
          search={search ?? ""}
        />
      </React.Suspense>

      <ModalQuickView />
    </main>
  );
}
