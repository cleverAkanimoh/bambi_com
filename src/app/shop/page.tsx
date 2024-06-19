import Breadcrumbs from "@/components/Breadcrumbs";
import { products } from "@/components/home/Products";
import Header from "@/components/shop/Header";
import ModalQuickView from "@/components/shop/ModalQuickView";
import ProductCardWrapper from "@/components/shop/ProductCardWrapper";
import React from "react";

export default function page({
  searchParams: { view, sort_by },
}: {
  searchParams: { view: string; sort_by: string };
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <Breadcrumbs active="Shop" />

      <React.Suspense>
        <Header />
      </React.Suspense>

      <React.Suspense>
        <ProductCardWrapper view={view ?? "grid"} />
      </React.Suspense>

      <ModalQuickView />
    </main>
  );
}
