"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";
import { useMediaQuery } from "react-responsive";
import { Controller, Pagination } from "swiper/modules";

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
  const IsBigMobile = useMediaQuery({ query: "(min-width: 500px)" });
  const IsTabletView = useMediaQuery({ query: "(min-width: 760px)" });
  const IsLaptopView = useMediaQuery({ query: "(min-width: 900px)" });
  return (
    <section className="p-4 py-10 flex flex-col">
      <h1 className="text-xl font-medium">Featured</h1>

      {/* <!-- Products Tab Start --> */}

      <div className="" data-aos-delay="400">
        <Swiper
          modules={[Pagination, Controller]}
          slidesPerView={
            IsLaptopView ? 4 : IsTabletView ? 3 : IsBigMobile ? 2 : 1
          }
          className="size-full overflow-hidden"
        >
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
          width={50}
          height={50}
          priority
          className="w-full group-hover:scale-110 group-hover:!bg-opacity-75 -z-10"
          src={src}
          alt={heading}
          data-aos="fade-in"
        />
      </Link>
      <span className="absolute top-2 left-2 bg-black p-1 !text-sm min-w-14 grid place-items-center rounded-md text-white">
        -18%
      </span>

      <div
        className="z-10 group-hover:fade-in opacity-0 group-hover:!opacity-100 absolute right-2 top-2 space-y-2 transition-all duration-300"
        data-aos="fade-in"
      >
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
      <button className="btn btn-whited btn-hover-primary text-capitalize add-to-cart absolute bottom-4 left-1/2 -translate-x-1/2 w-8/12 !text-sm  opacity-0 group-hover:!opacity-100">
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
