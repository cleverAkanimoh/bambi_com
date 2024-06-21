"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { AddToCartButton } from "./CartButtons";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer";

const ShopProductCard = ({
  src1,
  src2,
  old_price,
  new_price,
  description,
  heading,
  href,
  category,
  id,
}: {
  src1: string;
  src2?: string;
  href: string;
  old_price?: number;
  new_price: number;
  description?: string;
  heading: string;
  category?: string;
  id: string | number;
}) => {
  const quickViewClicked = () => {
    localStorage.setItem(
      "productInfo",
      JSON.stringify({
        src1,
        src2,
        old_price,
        new_price,
        description,
        heading,
        href,
        category,
        id,
      })
    );
  };
  return (
    <motion.div
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      transition={fadeUp.transition}
      className="col-xl-3 col-lg-4 col-md-4 col-sm-6 product"
    >
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
            <span className="sale">{category ?? "-18%"}</span>
          </span>
          <div className="actions">
            <Button className="action wishlist">
              <i className="pe-7s-like"></i>
            </Button>
            <Link href="/compare" className="action compare">
              <i className="pe-7s-refresh-2"></i>
            </Link>
            <button
              className="action quickview"
              data-bs-toggle="modal"
              data-bs-target="#quick-view"
              onClick={() => quickViewClicked()}
            >
              <i className="pe-7s-search"></i>
            </button>
          </div>
          <div className="add-cart-btn">
            <AddToCartButton
              cart={{
                src: src1,
                href,
                title: heading,
                price: new_price,
                quantity: 1,
                id,
              }}
            />
          </div>
        </div>
        <div className="content">
          <h5 className="title">
            <Link href={href}>{heading}</Link>
          </h5>
          <span className="price">
            <span className="new">${new_price}</span>
            {old_price && <span className="old">${old_price}</span>}
          </span>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ShopProductCard;

export const ProductCard = ({
  src,
  href,
  heading,
  price,
  quantity = 1,
  id,
}: {
  src: string;
  href: string;
  heading: string;
  price: number;
  quantity?: number;
  id: string | number;
}) => (
  <motion.div
    initial={fadeUp.initial}
    whileInView={fadeUp.whileInView}
    transition={fadeUp.transition}
  >
    <div className="relative group">
      <Link href={href} className="overflow-hidden block">
        <Image
          width={50}
          height={50}
          priority
          className="w-full group-hover:scale-110 group-hover:!bg-opacity-75 -z-10"
          src={src}
          alt={heading}
        />
      </Link>
      <span className="absolute top-2 left-2 bg-black p-1 !text-sm min-w-14 grid place-items-center rounded-md text-white">
        -18%
      </span>

      <div
        className="z-10 group-hover:fade-in opacity-0 group-hover:!opacity-100 absolute right-2 top-2 space-y-2"
        data-aos="fade-in"
        aos-delay="200"
      >
        <Button>
          <i className="pe-7s-like"></i>
        </Button>
        <Button>
          <i className="pe-7s-refresh-2"></i>
        </Button>
        {/* <Button>
          <i className="pe-7s-search"></i>
        </Button> */}
      </div>
      <AddToCartButton
        className="btn btn-whited btn-hover-primary text-capitalize add-to-cart absolute bottom-4 left-1/2 -translate-x-1/2 w-8/12 !text-sm  opacity-0 group-hover:!opacity-100"
        cart={{
          src,
          href,
          title: heading,
          price,
          quantity,
          id,
        }}
      />
    </div>
    <div className="flex flex-col items-center">
      <Link href={href} className="hover:text-primary">
        {heading}
      </Link>
      <span className="price">
        <span className="new">${price}</span>
      </span>
    </div>
  </motion.div>
);
