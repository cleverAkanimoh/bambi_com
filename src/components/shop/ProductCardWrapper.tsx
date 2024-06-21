import React, { Suspense } from "react";
import { ProductsType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import Pagination from "../Pagination";
import { shopProducts } from "@/lib/products";
import Header from "./Header";
import { BiShoppingBag } from "react-icons/bi";
import ShopProductCard from "../ProductCard";

export default function ProductCardWrapper({
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
  const searchValue = search.toLowerCase();
  const filteredProducts = search
    ? shopProducts.filter(
        (product) =>
          product.heading.toLowerCase().includes(searchValue) ||
          product.description?.toLowerCase().includes(searchValue) ||
          product.sales_category?.toLowerCase().includes(searchValue)
      )
    : shopProducts;

  const sortedFilteredProduct = sortBy
    ? filteredProducts.sort()
    : filteredProducts;

  const totalPages = filteredProducts.length;
  const POST_PER_PAGE = 10;
  return (
    <>
      <Suspense>
        <Header postPerPage={10} totalPages={totalPages} />
      </Suspense>
      <section className="space-y-4 my-8 p-4">
        {filteredProducts.length ? (
          <section className="row shop_wrapper grid_4">
            {sortedFilteredProduct.map((x, i) => (
              <ShopProductCard
                key={i}
                id={i + 1}
                src1="/assets/images/products/medium-product/2.jpg"
                src2="/assets/images/products/medium-product/3.jpg"
                new_price={x.new_price}
                old_price={x.old_price}
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
        {filteredProducts.length > 0 && (
          <aside className="flex justify-center !mt-20">
            <Pagination
              totalPosts={totalPages}
              postPerPage={POST_PER_PAGE}
              currentPage={currentPage}
            />
          </aside>
        )}
      </section>
    </>
  );
}
