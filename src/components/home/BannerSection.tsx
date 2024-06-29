import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ItemType } from "./Header";

import BannerImage1 from "../../../public/assets/images/banner/banner-1.jpg";
import BannerImage4 from "../../../public/assets/images/banner/banner-4.jpg";

export default function BannerSection() {
  return (
    <section className="">
      <div className="flex flex-wrap justify-center gap-6 p-2 xs:p-4">
        <BannerCard src={BannerImage1} title="" />
        <BannerCard src={BannerImage1} title="" />
        <BannerCard src={BannerImage4} title="" />
      </div>
    </section>
  );
}

const BannerCard = (props: ItemType) => (
  <div className="w-full max-w-lg" data-aos="fade-up" data-aos-delay="200">
    <Link href="/shop">
      <Image className="w-full" src={props.src} alt="Banner Image" />
    </Link>
  </div>
);
