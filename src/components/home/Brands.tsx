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
          >
            {/* <!-- Brand Logo Wrapper Start --> */}
            <div className="brand-logo-carousel arrow-outside-container">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <Brand src={Brand1} title="" />
                  <Brand src={Brand2} title="" />
                  <Brand src={Brand3} title="" />
                  <Brand src={Brand4} title="" />
                  <Brand src={Brand5} title="" />
                  <Brand src={Brand6} title="" />
                </div>
              </div>
            </div>
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
