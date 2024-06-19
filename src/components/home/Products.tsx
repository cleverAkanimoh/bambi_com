"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";

export const products = [
  {
    src: "/assets/images/products/medium-product/product.png",
    heading: "Dinosaur Toys for Baby",
    price: 50,
  },
  {
    src: "/assets/images/products/medium-product/product.png",
    heading: "Dinosaur Toys for Baby",
    price: 50,
  },
  {
    src: "/assets/images/products/medium-product/product.png",
    heading: "Dinosaur Toys for Baby",
    price: 50,
  },
  {
    src: "/assets/images/products/medium-product/product.png",
    heading: "Dinosaur Toys for Baby",
    price: 50,
  },
];

export default function Products() {
  return (
    <section className="p-4 flex flex-col">
      <h1 className="text-xl font-medium">Featured</h1>

      {/* <!-- Products Tab Start --> */}

      <div className="" data-aos-delay="400">
        <Swiper slidesPerView={2}>
          {products.map(({ src, heading, price }, index) => (
            <SwiperSlide key={index}>
              <ProductItemSlide
                src={src}
                href={"/"}
                heading={heading}
                price={price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const ProductItemSlide = ({
  src,
  href,
  heading,
  price,
}: {
  src: string | StaticImageData;
  href: string;
  heading: string;
  price: number;
}) => (
  <>
    <div className="relative group">
      <Link href={href} className="overflow-hidden block">
        <Image
          width={70}
          height={70}
          priority
          className="w-full group-hover:scale-110 transition-all duration-300 -z-10"
          src={src}
          alt="Product"
        />
      </Link>
      <span className="absolute top-2 left-2 bg-black p-1 !text-sm min-w-14 grid place-items-center rounded-md text-white">
        -18%
      </span>

      <div className="z-10 opacity-0  group-hover:!opacity-100 absolute right-2 top-2 space-y-2 transition-all duration-300">
        <Button>
          <i className="pe-7s-like"></i>
        </Button>
        <Button>
          <i className="pe-7s-refresh-2"></i>
        </Button>
        <Button>
          <i className="pe-7s-search"></i>
        </Button>
      </div>
      <button className="btn btn-whited btn-hover-primary text-capitalize add-to-cart absolute bottom-4 left-1/2 -translate-x-1/2 w-8/12 !text-sm  opacity-0 group-hover:!opacity-100 transition-all duration-300">
        Add To Cart
      </button>
    </div>
    <div className="flex flex-col items-center">
      <Link href={href} className="hover:text-primary">
        {heading}
      </Link>
      <span className="price">
        <span className="new">${price}</span>
      </span>
    </div>
  </>
);
