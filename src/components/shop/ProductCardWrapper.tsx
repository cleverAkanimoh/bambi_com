import React from "react";
// import { ProductCard } from "../ProductCard";
import { ProductsType } from "@/types";
import { products } from "../home/Products";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

export default function ProductCardWrapper({
  array,
  view,
}: {
  array?: ProductsType;
  view: string;
}) {
  return (
    <section className="row shop_wrapper grid_4 p-4">
      {[1, 2, 3, 4, 5, 5, 7, 7].map((x, i) => (
        <ShopProductCard key={i} />
      ))}
    </section>
  );
}

const ShopProductCard = () => (
  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 product">
    <div className="product-inner">
      <div className="thumb">
        <Link href="/" className="image">
          <Image
            className="first-image"
            src="/assets/images/products/medium-product/2.jpg"
            alt="Product"
            width={100}
            height={100}
          />
          <Image
            className="second-image fit-image"
            src="/assets/images/products/medium-product/3.jpg"
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
            href="#"
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
          <Link href="/product">Unique content product</Link>
        </h5>
        <span className="price">
          <span className="new">$12.50</span>
          <span className="old">$14.50</span>
        </span>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English.
        </p>
      </div>
    </div>
  </div>
);
