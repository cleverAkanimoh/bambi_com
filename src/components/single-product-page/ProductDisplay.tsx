"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Products } from "@/types";
import { AddToCartButton } from "../CartButtons";
import ThumbsSlider from "../ThumbsSlider";
import Link from "next/link";
import BamLink from "../BamLink";
import BamIcon from "../Icon";
import { HeartIcon, ShareIcon, TruckIcon } from "@heroicons/react/24/outline";
import { BsTwitter } from "react-icons/bs";
import { BiCheckSquare, BiRefresh, BiSave } from "react-icons/bi";

const Images = [
  "/assets/images/products/large-product/1.jpg",
  "/assets/images/products/large-product/2.jpg",
  "/assets/images/products/large-product/2.jpg",
  "/assets/images/products/large-product/3.jpg",
  "/assets/images/products/large-product/4.jpg",
  "/assets/images/products/large-product/1.jpg",
  "/assets/images/products/large-product/3.jpg",
  "/assets/images/products/large-product/4.jpg",
  "/assets/images/products/large-product/5.jpg",
  "/assets/images/products/large-product/5.jpg",
];

export default function ProductDisplay({
  singleProduct,
}: {
  singleProduct: Products;
}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <section className="p-4 flex max-lg:flex-col gap-4">
      <ThumbsSlider images={Images} />

      <div className="space-y-3 py-4  mx-auto max-w-lg">
        <h2 className="text-3xl font-bold">{singleProduct.heading}</h2>

        {/* <!-- Price Box Start --> */}
        <div className="flex gap-2 mb-2">
          <span className="">${singleProduct.new_price}</span>
          <del className="text-red-500">${singleProduct.old_price}</del>
        </div>

        {/* <!-- Description Start --> */}
        <p className="pb-4">{singleProduct.description}</p>

        <div className="flex items-center gap-4 pb-4">
          <strong>Qty: </strong>

          <div className="">
            <input
              type="number"
              className="h-9 w-16 text-center border"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="flex gap-4 pb-3">
          <AddToCartButton
            cart={{
              id: singleProduct.id,
              src: singleProduct.src1,
              href: singleProduct.href,
              title: singleProduct.heading,
              price: singleProduct.new_price,
              quantity,
            }}
          />

          <BamLink
            variant="ghost"
            href="/wishlist"
            title="Wishlist"
            className="flex items-center gap-1"
          >
            <BamIcon Icon={HeartIcon} size="med" />
            <span>Wishlist</span>
          </BamLink>
        </div>

        <div className="flex flex-wrap items-center">
          <strong>Social: </strong>
          <IconText Icon={HeartIcon} text="Like" href="#" />
          <IconText Icon={ShareIcon} text="Share" href="#" />
          <IconText Icon={BsTwitter} text="`Tweet`" href="#" />
          <IconText Icon={BiSave} text="Save" href="#" />
        </div>
        {/* <!-- Social Shear End --> */}

        {/* <!-- Payment Option Start --> */}
        <div className="flex items-center gap-2">
          <strong>Payment: </strong>

          <Link href="/checkout">
            <Image
              width={100}
              height={100}
              className=""
              src="/assets/images/payment/payment.png"
              alt="Payment Option Image"
            />
          </Link>
        </div>

        <div className="product-delivery-policy border-top pt-4 mt-4 border-bottom pb-4">
          <IconText
            Icon={BiCheckSquare}
            text="Security Policy (Edit With Customer Reassurance Module)"
            href="#"
          />
          <IconText
            Icon={TruckIcon}
            text="Delivery Policy (Edit With Customer Reassurance Module)"
            href="#"
          />
          <IconText
            Icon={BiRefresh}
            text="Return Policy (Edit With Customer Reassurance Module)"
            href="#"
          />
        </div>
        {/* <!-- Product Delivery Policy End --> */}
      </div>
    </section>
  );
}

const IconText = ({
  Icon,
  text,
  href,
}: {
  Icon: React.ElementType;
  text: string;
  href: string;
}) => (
  <BamLink
    variant="ghost"
    href={href}
    title={text}
    className="flex items-center gap-1"
  >
    <BamIcon Icon={Icon} size="med" />
    <span>{text}</span>
  </BamLink>
);
