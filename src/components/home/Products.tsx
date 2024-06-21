"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { useMediaQuery } from "react-responsive";
import { Controller, Pagination } from "swiper/modules";
import { ProductCard } from "../ProductCard";
import { shopProducts } from "@/lib/products";

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
          spaceBetween={10}
          className="size-full overflow-hidden"
        >
          {shopProducts.map(({ src1, heading, new_price }, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                id={index + 1}
                src={src1}
                href={`/shop/${index + 1}`}
                heading={heading}
                price={new_price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
