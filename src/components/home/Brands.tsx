"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ItemType } from "./Header";
import { motion } from "framer-motion";

import Brand1 from "../../../public/assets/images/brand-logo/1.png";
import Brand2 from "../../../public/assets/images/brand-logo/2.png";
import Brand3 from "../../../public/assets/images/brand-logo/3.png";
import Brand4 from "../../../public/assets/images/brand-logo/4.png";
import Brand5 from "../../../public/assets/images/brand-logo/5.png";
import Brand6 from "../../../public/assets/images/brand-logo/6.png";
import { fadeUp } from "@/lib/framer";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Controller, Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";


export default function Brands() {
  const IsBigMobile = useMediaQuery({ query: "(min-width: 500px)" });
  const IsTabletView = useMediaQuery({ query: "(min-width: 760px)" });
  const IsLaptopView = useMediaQuery({ query: "(min-width: 900px)" });
  return (
    <section className="mt-20">
      
          <motion.div
            className="w-11/12 md:w-10/12 mx-auto"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={fadeUp.transition}
          // data-aos="fade-up"
          >
            <Swiper
              loop
              modules={[Autoplay, Controller, Navigation]}
              // navigation={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={4}
              grid={{rows: 1}}
              autoHeight={true}
              spaceBetween={IsLaptopView? 10:IsTabletView? 20: IsBigMobile ? 30 : 40}
              className="size-full grid !place-items-center !items-center justify-center">
              <SwiperSlide className="size-full">
                <Brand src={Brand1} title="" />
              </SwiperSlide>
              <SwiperSlide className="size-full">
                <Brand src={Brand2} title="" />
              </SwiperSlide>
              <SwiperSlide className="size-full">
                <Brand src={Brand3} title="" />
              </SwiperSlide>
              <SwiperSlide className="size-full">
                <Brand src={Brand4} title="" />
              </SwiperSlide>
              <SwiperSlide className="size-full">
                <Brand src={Brand5} title="" />
              </SwiperSlide>
              <SwiperSlide className="size-full">
                <Brand src={Brand6} title="" />
              </SwiperSlide>

            </Swiper>
          </motion.div>
     
    </section>
  );
}

const Brand = ({ src }: ItemType) => (
  <div className="swiper-slide single-brand-logo">
    <Link href="#">
      <Image className="size-28" src={src} alt="Brand Logo" />
    </Link>
  </div>
);
