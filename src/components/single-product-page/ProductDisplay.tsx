"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Products } from "@/types";
import { AddToCartButton } from "../CartButtons";
import ThumbsSlider from "../ThumbsSlider";
import Link from "next/link";
import BamLink from "../BamLink";
import BamIcon from "../Icon";
import { HeartIcon } from "@heroicons/react/24/outline";

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

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{singleProduct.heading}</h2>

        {/* <!-- Price Box Start --> */}
        <div className="flex gap-2 mb-2">
          <span className="">${singleProduct.new_price}</span>
          <del className="text-red-500">${singleProduct.old_price}</del>
        </div>
        {/* <!-- Price Box End --> */}

        {/* <!-- SKU Start --> */}
        {singleProduct.sku && (
          <div className="sku mb-3">
            <span>SKU: {singleProduct.sku}</span>
          </div>
        )}
        {/* <!-- SKU End --> */}

        {/* <!-- Product Inventory Start --> */}
        {singleProduct.availability && (
          <div className="product-inventroy mb-3">
            <span className="inventroy-title">
              <strong>Availability: </strong>
            </span>
            <span className="inventory-varient">
              {singleProduct.availability} Left in Stock
            </span>
          </div>
        )}
        {/* <!-- Product Inventory End --> */}

        {/* <!-- Description Start --> */}
        <p className="mb-7">{singleProduct.description}</p>

        <div className="flex items-center gap-4 mb-5">
          <strong>Qty: </strong>

          <div className="">
            <input
              type="number"
              className="h-9 w-16 text-center ring ring-primary"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
        </div>

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

        <div className="">
          <strong>Social: </strong>

          <a href="#" className="">
            Like
          </a>
          <a href="#" className="twitter-color">
            <i className="fa fa-twitter"></i> Tweet
          </a>
          <a href="#" className="pinterest-color">
            <i className="fa fa-pinterest"></i> Save
          </a>
        </div>
        {/* <!-- Social Shear End --> */}

        {/* <!-- Payment Option Start --> */}
        <div className="flex items-center gap-2">
          <strong>Payment: </strong>

          <Link href="#">
            <Image
              width={100}
              height={100}
              className=""
              src="/assets/images/payment/payment.png"
              alt="Payment Option Image"
            />
          </Link>
        </div>
        {/* <!-- Payment Option End --> */}

        {/* <!-- Product Delivery Policy Start --> */}
        <ul className="product-delivery-policy border-top pt-4 mt-4 border-bottom pb-4">
          <li>
            {" "}
            <i className="fa fa-check-square"></i>{" "}
            <span>Security Policy (Edit With Customer Reassurance Module)</span>
          </li>
          <li>
            <i className="fa fa-truck"></i>
            <span>Delivery Policy (Edit With Customer Reassurance Module)</span>
          </li>
          <li>
            <i className="fa fa-refresh"></i>
            <span>Return Policy (Edit With Customer Reassurance Module)</span>
          </li>
        </ul>
        {/* <!-- Product Delivery Policy End --> */}
      </div>
    </section>
  );
}
