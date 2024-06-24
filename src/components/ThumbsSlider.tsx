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
  images: string[] | StaticImageData[];
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  return (
    <aside className="w-full max-lg:space-y-3 lg:flex flex-row-reverse">
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
            {typeof src === "string" ? (
              <Link
                href={src}
                //   download
                target="_blank"
                rel="noopener noreferrer"
                title="Click to view larger image"
                className="border border-blue-100 hover:border-primary rounded-md p-1 xs:hover:p-1.5 transition-all duration-300 cursor-e-resize max-w-fit"
              >
                <Image
                  src={src}
                  alt={heading ?? "Single product page"}
                  width={300}
                  height={200}
                  className={"w-full max-w-[350px] h-auto rounded-sm"}
                />
              </Link>
            ) : (
              <Image
                src={src}
                alt={heading ?? ""}
                className={"w-full h-auto"}
                width={300}
                height={200}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail(s) */}
      <Swiper
        spaceBetween={5}
        // slidesPerView={6}

        autoHeight={true}
        slidesPerView={images.length > 5 ? 5 : images.length}
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        className="lg:rotate-90 shrink-0"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="bg-white max-w-fit rounded-sm">
            <Image
              src={src}
              alt={heading ?? ""}
              className={clsx(
                "size-20  scale-90 rounded-md hover:brightness-[.8]",
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
