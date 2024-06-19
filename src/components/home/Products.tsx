"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";
import { useMediaQuery } from "react-responsive";
import { Controller, Pagination } from "swiper/modules";
import { ProductCard } from "../ProductCard";

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
              <ProductCard
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
