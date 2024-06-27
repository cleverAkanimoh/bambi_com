"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useMediaQuery } from "react-responsive";
import { Controller, Pagination } from "swiper/modules";
import { HomeProductCard } from "@/components/shop/HomeProductCard";
import { ProductsType } from "@/types";

export default function Products({ products }: { products: ProductsType }) {
  const IsBigMobile = useMediaQuery({ query: "(min-width: 500px)" });
  const IsTabletView = useMediaQuery({ query: "(min-width: 760px)" });
  const IsLaptopView = useMediaQuery({ query: "(min-width: 900px)" });

  if (!products) {
    return <p>No product was found</p>;
  }
  return (
    <section className="p-4 py-10 flex flex-col w-11/12 md:w-10/12 mx-auto">
      <h1 className="text-xl font-medium mb-3">Featured</h1>

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
          {products
            .splice(0, 8)
            .map(({ id, src1, heading, new_price }, index) => (
              <SwiperSlide key={index}>
                <HomeProductCard
                  id={id}
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
