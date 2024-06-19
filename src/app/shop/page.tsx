import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/shop/Header";
import ModalQuickView from "@/components/shop/ModalQuickView";
import React from "react";

export default function page({
  searchParams,
}: {
  searchParams: { view: string };
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <Breadcrumbs active="Shop" />

      <React.Suspense>
        <Header />
      </React.Suspense>

      <section></section>

      <ModalQuickView />
    </main>
  );
}
