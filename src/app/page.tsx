"use client"
import BannerSection from "@/components/home/BannerSection";
import Brands from "@/components/home/Brands";
import CtaSection from "@/components/home/CtaSection";
import Header from "@/components/home/Header";
import Products from "@/components/home/Products";
import banner4 from "../../public/assets/images/banner/4.png"
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Products />
      {/* <BannerSection /> */}
      <CtaSection />
      <motion.div
       
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={fadeUp.transition} 
            className="!overflow-hidden w-11/12 md:w-10/12 mx-auto">
        <Image className="size-full hover:scale-110 transition-all ease-in-out duration-200" src={banner4} alt="banner image"/>
      </motion.div>
      <Brands />
    </main>
  );
}
