"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { AddToCartButton } from "./CartButtons";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer";
import { CiSearch } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { FcLike } from "react-icons/fc";

const ShopProductCard = ({
  src1,
  old_price,
  new_price,
  description,
  heading,
  href,
  category,
  id,
}: {
  src1: string;
  href: string;
  old_price?: number;
  new_price: number;
  description?: string;
  heading: string;
  category?: string;
  id: string | number;
}) => {
  const [isLiked, setIsLiked] = useState(false)
  const quickViewClicked = () => {
    localStorage.setItem(
      "productInfo",
      JSON.stringify({
        src1,
        old_price,
        new_price,
        description,
        heading,
        href,
        category,
        id,
      })
    );
  };
const addToWishList = () =>{
  setIsLiked(prevState=>!prevState)
}


  return (
    <motion.div
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      transition={fadeUp.transition}
      viewport={{ once: true }}
      className=""
    >
      <div className="group">
        <div className="relative">
          <Link href={href} className="image">
            <Image
              className="size-full"
              src={src1}
              alt="Product"
              width={100}
              height={100}
            />
                    </Link>
          <span className="absolute top-2 left-2 bg-black p-1 !text-sm min-w-14 grid place-items-center rounded-md   text-white ">
            <span className="text-center">{category ?? "-18%"}</span>
          </span>
          <div className="flex flex-col gap-6 absolute top-4 group-hover:top-2 right-4 text-xl p-3 text-[#555] opacity-0 group-hover:opacity-100 transition-all ease-linear duration-[400ms]">
            <button onClick={addToWishList} className="bg-white p-2 hover:bg-primary hover:text-white transition-all ease-linear duration-150 rounded">
             {isLiked ? <FcLike /> : <CiHeart />} 
            </button>
            <Link href="/compare" className="bg-white p-2 hover:bg-primary hover:text-white transition-all ease-linear duration-150 rounded">
              <SlRefresh />
            </Link>
            <button
              className="bg-white p-2 hover:bg-primary hover:text-white transition-all ease-linear duration-150 rounded"
              data-bs-toggle="modal"
              data-bs-target="#quick-view"
              onClick={() => quickViewClicked()}
              
            >
              <CiSearch />
            </button>
          </div>
          <div className="absolute -translate-y-[0rem] !opacity-0 group-hover:!opacity-100 group-hover:-translate-y-[4rem]  left-1/2 -translate-x-1/2 w-1/2 bg-white hover:bg-primary hover:!text-white mx-auto text-center rounded p-3 transition-all ease-linear duration-[400ms]">
            <AddToCartButton
              cart={{
                src: src1,
                href,
                title: heading,
                price: new_price,
                quantity: 1,
                id,
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 mt-2">
          <h5 className="">
            <Link className="text-black hover:text-primary" href={href}>{heading}</Link>
          </h5>
          <span className="flex items-center gap-2">
            <span className="!text-primary">${new_price}</span>
            {old_price && <span className="!text-red-400">${old_price}</span>}
          </span>
          {/* <p>{description}</p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ShopProductCard;
