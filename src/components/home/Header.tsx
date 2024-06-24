"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import SliderImage1 from "../../../public/assets/images/slider/slider3-1.png";
import SliderImage2 from "../../../public/assets/images/slider/slider3-2.1.png";
import SliderImage3 from "../../../public/assets/images/slider/slider3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import BamLink from "../BamLink";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer";
import { Autoplay, Controller, Pagination } from "swiper/modules";

export default function Header() {
  return (
    <header className="flex flex-col h-full">
      <Swiper
        loop
        modules={[Autoplay, Pagination, Controller]}
        className="size-full"
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide className="size-full">
          <SlideItem
            src={SliderImage1}
            title={
              <>
                Shop for the best <br />
                Games and Storybooks <br />
                for kids and family
              </>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            src={SliderImage2}
            title={
              <>
                Discover endless <br /> fun with Bambi <br /> screen-free games
              </>
            }
            paragraph="Check out the best gift collection for your baby."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            src={SliderImage3}
            title={
              <>
                Shop for the best <br />
                Games and Storybooks <br />
                for kids and family
              </>
            }
            paragraph="Check out the best gift collection for your baby."
          />
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

export type ItemType = {
  src: string | StaticImageData;
  paragraph?: string;
  title: React.ReactNode;
};

const SlideItem = ({ src, paragraph, title }: ItemType) => (
  <div className="h-[55svh] md:h-[65svh] xl:h-[70svh] w-screen overflow-hidden flex items-center">
    <Image
      src={src}
      alt="Slider Image"
      className="size-full object-fill absolute -z-10"
      priority
    />
    <motion.div
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      transition={fadeUp.transition}
      className="text-white max-w-[60%] p-4 xs:p-6 space-y-6 md:ml-[5%] lg:ml-[10%]"
    >
      <h2 className="text-lg xs:text-2xl md:text-4xl lg:5xl font-bold">
        {title}
      </h2>
      {paragraph && <p className="">{paragraph}</p>}
      <BamLink
        href="/shop"
        className="w-fit px-6 xs:px-8 py-4 xs:text-base lg:text-lg block hover:animate-pulse"
      >
        Shop Now
      </BamLink>
    </motion.div>
  </div>
);
