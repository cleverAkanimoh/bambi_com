import React, { Suspense } from "react";
import { ProductsType } from "@/types";
import Link from "next/link";
import Pagination from "../Pagination";
import { shopProducts } from "@/lib/products";
import Header from "./Header";
import { BiShoppingBag } from "react-icons/bi";
import ShopProductCard from "../ProductCard";

import { getAllProductsInStore } from "@/helpers/products";

export default async function ProductCardWrapper({
  array,
  sortBy,
  search,
  currentPage,
}: {
  array?: ProductsType;
  sortBy: string;
  search: string;
  currentPage: number;
}) {
  const shopProducts = await getAllProductsInStore();

  const searchValue = search.toLowerCase();
  const filteredProducts = search
    ? shopProducts?.filter(
        (product) =>
          product.heading.toLowerCase().includes(searchValue) ||
          product.description?.toLowerCase().includes(searchValue) ||
          product.sales_category?.toLowerCase().includes(searchValue)
      )
    : shopProducts;

  const sortedFilteredProduct =
    sortBy === "price"
      ? filteredProducts?.sort((a, b) => a.new_price - b.new_price)
      : filteredProducts;

  const totalPages = sortedFilteredProduct?.length;
  const POST_PER_PAGE = 10;

  const lastPostIndex = currentPage * POST_PER_PAGE;
  const firstPostIndex = lastPostIndex - POST_PER_PAGE;
  return (
    <>
      <Suspense>
        <Header postPerPage={POST_PER_PAGE} totalPages={totalPages || 0} />
      </Suspense>
      <section className="">
        {sortedFilteredProduct?.length ? (
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 p-6 md:p-12 items-center place-tems-center">
            {sortedFilteredProduct
              .slice(firstPostIndex, lastPostIndex)
              .map((x, i) => (
                <ShopProductCard
                  key={i}
                  id={`${x.id}`}
                  src1="/assets/images/products/medium-product/2.jpg"
                  new_price={x.new_price}
                  old_price={x.old_price || 0}
                  heading={x.heading}
                  description={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.`}
                  href={`/shop/${i + 1}`}
                />
              ))}
          </section>
        ) : (
          <section
            className="flex flex-col gap-6 items-center justify-center min-h-40 p-2 xs:p-4"
            // data-aos="fade-down"
          >
            <BiShoppingBag size={130} className="opacity-60" />
            <h3>
              No product was found for{" "}
              <span className="text-primary">{search}</span>
            </h3>

            <Link href="?">clear search</Link>
          </section>
        )}
        {(filteredProducts?.length || 0) > 0 && (
          <aside className="flex justify-center !mt-20">
            <Pagination
              totalPosts={totalPages || 0}
              postPerPage={POST_PER_PAGE}
              currentPage={currentPage}
            />
          </aside>
        )}
      </section>
    </>
  );
}
