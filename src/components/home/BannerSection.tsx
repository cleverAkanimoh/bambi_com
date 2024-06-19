import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ItemType } from "./Header";

import BannerImage1 from "../../../public/assets/images/banner/banner-1.jpg";
import BannerImage4 from "../../../public/assets/images/banner/banner-4.jpg";

export default function BannerSection() {
  return (
    <section className=" sm:hidden">
      <div className="inline">
        <BannerCard src={BannerImage1} title="" />
        <BannerCard src={BannerImage1} title="" />
        <BannerCard src={BannerImage4} title="" />
      </div>
    </section>
  );
}

const BannerCard = (props: ItemType) => (
  <div className="p-4 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
    <Link href="/shop">
      <Image className="w-full" src={props.src} alt="Banner Image" />
    </Link>
  </div>
);
