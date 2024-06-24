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
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


export default function Brands() {
  return (
    <section>
      <div className="py-8">
        <div className="row">
          <motion.div
            className="col-12"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={fadeUp.transition}
            // data-aos="fade-up"
          >
              <Swiper
              navigation={true} 
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
              }}
              //   pagination={pagination}
              autoHeight={true}
              className="size-full">
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
        </div>
      </div>
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
