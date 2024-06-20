import React, { Suspense } from "react";
import { ProductsType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import Pagination from "../Pagination";
import { shopProducts } from "@/lib/products";
import Header from "./Header";
import { BiShoppingBag } from "react-icons/bi";

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
                src1="/assets/images/products/medium-product/2.jpg"
                src2="/assets/images/products/medium-product/3.jpg"
                new_price={x.new_price}
                old_price={x.old_price}
                heading={x.heading}
                description={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.`}
                href="/shop"
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

const ShopProductCard = ({
  src1,
  src2,
  old_price,
  new_price,
  description,
  heading,
  href,
}: {
  src1: string;
  src2?: string;
  href: string;
  old_price?: number;
  new_price: number;
  description: string;
  heading: string;
}) => (
  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 product">
    <div className="product-inner">
      <div className="thumb">
        <Link href={href} className="image">
          <Image
            className="first-image"
            src={src1}
            alt="Product"
            width={100}
            height={100}
          />
          <Image
            className="second-image fit-image"
            src={src2 ?? src1}
            alt="Product"
            width={100}
            height={100}
          />
        </Link>
        <span className="badges">
          <span className="sale">-18%</span>
        </span>
        <div className="actions">
          <Button className="action wishlist">
            <i className="pe-7s-like"></i>
          </Button>
          <Link href="/compare" className="action compare">
            <i className="pe-7s-refresh-2"></i>
          </Link>
          <Link
            href={`?`}
            className="action quickview"
            data-bs-toggle="modal"
            data-bs-target="#quick-view"
          >
            <i className="pe-7s-search"></i>
          </Link>
        </div>
        <div className="add-cart-btn">
          <button className="btn btn-whited btn-hover-primary text-capitalize add-to-cart">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="content">
        <h5 className="title">
          <Link href={href}>{heading}</Link>
        </h5>
        <span className="price">
          <span className="new">${old_price}</span>
          <span className="old">${new_price}</span>
        </span>
        <p>{description}</p>
      </div>
    </div>
  </div>
);
