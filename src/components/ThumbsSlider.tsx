"use client";

import Image, { StaticImageData } from "next/image";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";
import { Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import clsx from "clsx";
import Link from "next/link";

export default function ThumbsSlider({
  images,
  heading,
}: {
  heading?: string;
  images: string[];
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  return (
    <aside className="w-full max-lg:space-y-3 mx-auto max-w-lg">
      {/* main swiper */}
      <Swiper
        // loop
        // autoHeight={true}
        autoplay={{
          delay: 20000,
          pauseOnMouseEnter: true,
        }}
        modules={[Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setIsActiveIndex(swiper.activeIndex)}
        className="size-full shrink-0"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Link
              href={src}
              //   download
              target="_blank"
              rel="noopener noreferrer"
              title="Click to view larger image"
              className="block hover:border-primary rounded-md transition-all duration-300 cursor-e-resize"
            >
              <Image
                src={src}
                alt={heading ?? "Single product page"}
                width={300}
                height={200}
                className={"w-full h-full rounded-sm"}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail(s) */}
      <Swiper
        spaceBetween={5}
        slidesPerView={images.length > 5 ? 5 : images.length}
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        className="shrink-0 size-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="bg-white  rounded-sm">
            <Image
              src={src}
              alt={heading ?? ""}
              className={clsx(
                "size-24 scale-95  rounded-md hover:brightness-[.9]",
                {
                  "ring ring-primary p-[1px] pointer-events-none":
                    isActiveIndex === index,
                  "cursor-pointer": isActiveIndex !== index,
                }
              )}
              width={30}
              height={30}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </aside>
  );
}
