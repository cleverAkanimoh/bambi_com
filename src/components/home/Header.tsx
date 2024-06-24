"use client";

import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
import SliderImage1 from "../../../public/assets/images/slider/slider3-1.png";
import SliderImage2 from "../../../public/assets/images/slider/slider3-2.1.png";
import SliderImage3 from "../../../public/assets/images/slider/slider3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Header() {
  return (
    <header className="flex flex-col h-full">
      <Swiper className="size-full">
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
  <div className="h-[45svh] w-screen overflow-hidden">
    <div className="hero-slide-bg !size-full">
      <Image
        src={src}
        alt="Slider Image"
        className="size-full object-fill"
        priority
      />
    </div>
    <div className="container !flex flex-col mt-8">
      <div className="hero-slide-content">
        <h2 className="title m-0">{title}</h2>
        <p className="text-white">{paragraph}</p>
        <Link href="/shop" className="btn btn-primary btn-hover-light">
          Shop Now
        </Link>
      </div>
    </div>
  </div>
);
